import VisitRequest from '../models/VisitRequest.js'

// User ka visit request save karo (public, koi login nahi chahiye)
export const submitVisit = async (req, res) => {
  try {
    const {
      farm, mode, purpose,
      name, phone, email, city, organisation,
      size, preferredDate, alternativeDate, slot, about, otherFarmVisit, hear,
      agreeRules, agreeData
    } = req.body

    if (!farm || !purpose || !name || !phone || !city) {
      return res.status(400).json({ message: 'Please fill all required fields' })
    }
    if (!agreeRules || !agreeData) {
      return res.status(400).json({ message: 'Please agree to the visit rules and privacy terms' })
    }

    const visit = new VisitRequest({
      farm, mode, purpose,
      name, phone, email, city, organisation,
      size, preferredDate, alternativeDate, slot, about, otherFarmVisit, hear,
      agreeRules, agreeData
    })
    await visit.save()

    res.status(201).json({ message: 'Visit request received', reference: visit.reference })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Admin — saari requests dekho, chaho to status se filter karo (?status=pending)
export const getVisits = async (req, res) => {
  try {
    const { status } = req.query
    const filter = status ? { status } : {}
    const visits = await VisitRequest.find(filter).sort({ createdAt: -1 })
    res.json(visits)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Admin — ek request ka status badlo (approve / decline / info)
export const updateVisitStatus = async (req, res) => {
  try {
    const { status } = req.body
    if (!['pending', 'approved', 'info', 'declined'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' })
    }
    const visit = await VisitRequest.findById(req.params.id)
    if (!visit) {
      return res.status(404).json({ message: 'Visit request not found' })
    }
    visit.status = status
    await visit.save()
    res.json(visit)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}