import mongoose from 'mongoose'

const visitRequestSchema = new mongoose.Schema({
  reference: {
    type: String,
    unique: true
  },

  // Step 1
  farm: { type: String, required: true },       // 'punjab' | 'ontario' | 'navi'
  mode: { type: String },                        // sirf farm === 'navi' ho to
  purpose: { type: String, required: true },

  // Step 2
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  city: { type: String, required: true },
  organisation: { type: String },
  size: { type: String, required: true },
  preferredDate: { type: String, required: true },
  alternativeDate: { type: String },
  slot: { type: String, required: true },
  about: { type: String, required: true },
  otherFarmVisit: { type: String, required: true },  // 'Yes' | 'No'
  hear: { type: String },

  // Step 3
  agreeRules: { type: Boolean, required: true },
  agreeData: { type: Boolean, required: true },

  // Admin
  status: {
    type: String,
    enum: ['pending', 'approved', 'info', 'declined'],
    default: 'pending'
  }
}, { timestamps: true })

// Save hone se pehle reference number bana do, jaise FV-26-0142
// Ye function async hai, isliye "next" callback nahi lete — bas kaam khatam hote hi apne aap aage badh jaata hai
visitRequestSchema.pre('save', async function () {
  if (this.reference) return
  const year = new Date().getFullYear().toString().slice(-2)
  const count = await mongoose.model('VisitRequest').countDocuments()
  this.reference = `FV-${year}-${String(count + 1).padStart(4, '0')}`
})

export default mongoose.model('VisitRequest', visitRequestSchema)