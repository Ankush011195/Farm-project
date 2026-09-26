// Route: <Route path="/privacy" element={<Privacy />} />

const wrap = 'mx-auto w-full max-w-[820px] px-6 md:px-10'
const sec = 'py-16 md:py-[88px]'

const sections = [
  ['01', 'What we collect', 'Name, phone, email, location, organisation and the details you give us in visit, order and partnership forms.'],
  ['02', 'Why we collect it', 'To process orders, review and schedule visit requests, run Academy batches and respond to enquiries.'],
  ['03', 'Visit registrations', 'Visit details are used only to review, approve and manage your visit and farm biosecurity. We do not collect copies of identity documents online; photo ID is checked at the gate.'],
  ['04', 'Who we share it with', 'No one, except service providers who help us operate (such as messaging and hosting), bound to protect it.'],
  ['05', 'How long we keep it', 'Visit records for [12 months]; order records as required by law.'],
  ['06', 'Your rights', "Access, correct or delete your data, and withdraw consent, under India's Digital Personal Data Protection Act, 2023 and Canada's PIPEDA."],
  ['07', 'Contact', 'Grievance officer: [Name], [email]'],
]

function Privacy() {
  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HEADER */}
      <section className={sec}>
        <div className={`${wrap} flex flex-col gap-[22px]`}>
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]">Legal</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[40px] font-normal leading-[1.1] md:text-[52px]">Privacy Policy</h1>
          <p className="text-[13px] leading-[1.7] text-[#4A5248]">Last updated: [DD MMM YYYY]</p>
          <p className="text-sm leading-[1.7] text-[#8A6420]">This is a draft structure. Have it reviewed by a lawyer before publishing.</p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="pb-16 md:pb-[88px]">
        <div className={wrap}>
          {sections.map(([n, title, text], i) => (
            <div
              key={n}
              className={`flex gap-[18px] border-t border-[#DCD2BE] py-5 ${i === sections.length - 1 ? 'border-b' : ''}`}
            >
              <span className="w-[34px] shrink-0 font-['Fraunces',serif] text-xl text-[#8A6420]">{n}</span>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-bold">{title}</span>
                <span className="text-sm leading-[1.6] text-[#4A5248]">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Privacy