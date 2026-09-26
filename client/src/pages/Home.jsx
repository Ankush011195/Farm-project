import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className='relative px-6 md:px-[72px] pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[600px] md:min-h-[900px] flex items-end bg-[#17261C]'>
        <video
          src='/Hero-video.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover opacity-50'
        />
        <div className='absolute inset-0 bg-[#0F1A13]/60'></div>

        <div className='relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-12'>
          <div className='max-w-[600px]'>
            <FadeIn delay={0}>
              <p className="font-['Manrope',_sans-serif] text-[13px] font-bold text-[#C9DE9E] tracking-[4px] mb-7">
                CANADIAN PRECISION · PUNJABI ROOTS
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="font-['Fraunces',_Georgia,_serif] font-normal text-5xl md:text-7xl leading-[0.98] text-[#F5F1E8] mb-7">
                Food is the{' '}
                <em className='italic text-[#C9DE9E]'>first medicine.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className='text-base md:text-lg text-[#E6E0D2] leading-relaxed mb-9'>
                Clean, residue-tested vegetables grown with 15 years of
                Canadian greenhouse expertise. Now growing in Punjab, for
                Punjab.
              </p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link to='/produce' className="h-[58px] px-8 rounded-full bg-[#C9DE9E] text-[#17261C] flex items-center justify-center text-[15px] md:text-base font-bold no-underline hover:opacity-90">
                  Order fresh produce
                </Link>
                <Link to='/grow-with-us' className="h-[58px] px-8 rounded-full border border-[#C9DE9E] text-[#F5F1E8] flex items-center justify-center text-[15px] md:text-base font-semibold no-underline hover:bg-white/5">
                  Grow with Farmacy
                </Link>
              </div>
            </FadeIn>
            <p className='mt-6 text-xs text-[#BDB6A6]'>Pictured: our Ontario greenhouse, St. Thomas</p>
          </div>

          {/* Proof card — desktop only, floats over hero image */}
          <FadeIn delay={0.3} direction='left'>
            <div className='hidden md:flex w-[340px] bg-[#F5F1E8]/95 rounded-3xl p-7 flex-col gap-[18px] text-[#17261C]'>
              <span className="font-['Manrope',_sans-serif] text-[11px] font-bold tracking-[3px] text-[#8A6420]">
                THE PROOF
              </span>
              <div className='flex justify-between items-baseline border-b border-[#DCD2BE] pb-3.5'>
                <span className="font-['Fraunces',_serif] text-[34px]">15+</span>
                <span className='text-[13px] text-[#4A5248] w-[170px] text-right'>years in commercial greenhouses</span>
              </div>
              <div className='flex justify-between items-baseline border-b border-[#DCD2BE] pb-3.5'>
                <span className="font-['Fraunces',_serif] text-[34px]">8,000</span>
                <span className='text-[13px] text-[#4A5248] w-[170px] text-right'>sq m under protection in Punjab</span>
              </div>
              <div className='flex justify-between items-baseline'>
                <span className="font-['Fraunces',_serif] text-[34px]">2</span>
                <span className='text-[13px] text-[#4A5248] w-[170px] text-right'>countries, one standard</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof Band — mobile only (desktop uses the floating card above) */}
      <section className='md:hidden bg-[#17261C] px-6 py-9'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
          {[
            ['15+', 'Years running commercial greenhouses in Canada'],
            ['2', 'Countries, one growing standard'],
            ['8,000', 'Square metres under protection in Punjab'],
            ['A-grade', 'Quality proven with major Canadian grocery chains'],
          ].map(([num, label]) => (
            <div key={label} className='flex flex-col gap-1.5'>
              <span className="font-['Fraunces',_serif] text-[36px] text-[#C9DE9E]">{num}</span>
              <span className='text-xs leading-relaxed text-[#D9D2C2]'>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className='bg-[#F5F1E8] px-6 md:px-[72px] py-18 md:py-28'>
        <div className='max-w-2xl'>
          <FadeIn>
            <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>WHY FARMACY</p>
            <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-6">
              Punjab fed a nation. Now it deserves food it can{' '}
              <em className='italic'>trust.</em>
            </h2>
            <p className='text-base text-[#4A5248] leading-relaxed'>
              We spent 15 years growing for Canada's strictest buyers. Every
              crate audited, every input recorded. Farmacy brings that same
              discipline home to Punjab, so the food on your family's table
              is grown with the care a pharmacy gives medicine.
            </p>
          </FadeIn>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mt-8'>
          <FadeIn delay={0.1} direction='up'>
            <div className='bg-[#EDE6D8] rounded-[20px] p-6'>
              <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-2.5'>OUR MISSION</p>
              <p className="font-['Fraunces',_serif] text-xl text-[#17261C] leading-snug">
                Grow clean, tested, traceable food with world-class
                precision, and put that knowledge in the hands of Punjab's
                farmers.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction='up'>
            <div className='bg-[#17261C] rounded-[20px] p-6'>
              <p className='text-[11px] tracking-[3px] font-bold text-[#C9DE9E] mb-2.5'>OUR VISION</p>
              <p className="font-['Fraunces',_serif] text-xl text-[#F5F1E8] leading-snug">
                A network of Farmacy-standard farms across Punjab, where
                every farmer grows like the best in the world.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Two Countries / Our Farms preview */}
      <section id='farms' className='bg-[#EDE6D8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>OUR FARMS</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-10 md:mb-14">
            Two countries.<br />One standard.
          </h2>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FadeIn delay={0} direction='up'>
            <article className='bg-[#F5F1E8] rounded-3xl overflow-hidden h-full'>
              <img
                src='/Canada-farm.jpg'
                alt='Ontario greenhouse from above'
                className='w-full h-52 object-cover'
              />
              <div className='p-6 flex flex-col gap-3'>
                <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420]'>ONTARIO, CANADA · WHERE WE LEARNED</p>
                <h3 className="font-['Fraunces',_serif] text-2xl text-[#17261C]">The proving ground</h3>
                <p className='text-sm text-[#4A5248] leading-relaxed'>
                  A commercial glass greenhouse in St. Thomas growing
                  high-wire tomatoes, cucumbers and peppers for major
                  Canadian retailers. This is where our systems were built
                  and tested at scale.
                </p>
                <div className='flex flex-wrap gap-2 pt-1'>
                  <span className='px-3.5 py-2 rounded-2xl border border-[#CFC4AD] text-xs font-semibold'>Glass greenhouse</span>
                  <span className='px-3.5 py-2 rounded-2xl border border-[#CFC4AD] text-xs font-semibold'>Retail food-safety audited</span>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1} direction='up'>
            <article className='bg-[#F5F1E8] rounded-3xl overflow-hidden h-full'>
              <div className='h-52 bg-[#D9E6BF] flex items-center justify-center p-6'>
                <p className='text-sm font-semibold text-[#3F5A22] text-center'>
                  [Drone shot: Structure 1, Machhipur, crop in full growth]
                </p>
              </div>
              <div className='p-6 flex flex-col gap-3'>
                <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420]'>MOHALI, PUNJAB · WHERE WE BELONG</p>
                <h3 className="font-['Fraunces',_serif] text-2xl text-[#17261C]">Home soil, new standard</h3>
                <p className='text-sm text-[#4A5248] leading-relaxed'>
                  An 8,000 sq m naturally ventilated polyhouse in Village
                  Machhipur, Kharar. Cucumber and bell pepper grown on
                  cocopeat with computer-controlled fertigation, run on the
                  same playbook as Ontario.
                </p>
                <div className='flex flex-wrap gap-2 pt-1'>
                  <span className='px-3.5 py-2 rounded-2xl border border-[#CFC4AD] text-xs font-semibold'>Soilless cocopeat</span>
                  <span className='px-3.5 py-2 rounded-2xl border border-[#CFC4AD] text-xs font-semibold'>Precision fertigation</span>
                  <span className='px-3.5 py-2 rounded-2xl border border-[#CFC4AD] text-xs font-semibold'>First harvest [Feb 2027]</span>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-6'>
          <FadeIn delay={0.15} direction='up'>
            <div className='bg-[#17261C] rounded-2xl p-4.5'>
              <p className='text-[10px] tracking-[2px] font-bold text-[#C9DE9E] mb-2'>FROM CANADA</p>
              <p className='text-sm text-[#E6E0D2] leading-relaxed'>Systems, data, food-safety discipline, retail-grade quality</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.25} direction='up'>
            <div className='bg-[#17261C] rounded-2xl p-4.5'>
              <p className='text-[10px] tracking-[2px] font-bold text-[#C9DE9E] mb-2'>FROM PUNJAB</p>
              <p className='text-sm text-[#E6E0D2] leading-relaxed'>Our roots, our people, our farmers, our community</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Farmacy Standard preview */}
      <section id='standard' className='bg-[#F5F1E8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>THE FARMACY STANDARD</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-6">
            Five promises we can <em className='italic'>prove.</em>
          </h2>
          <p className='text-base text-[#4A5248] leading-relaxed max-w-2xl mb-4'>
            Not slogans. Every promise below is measured, recorded and open
            to you.
          </p>
        </FadeIn>

        <div className='flex flex-col max-w-2xl'>
          {[
            ['01', 'Precision-fed', 'Every plant gets measured nutrition and water through drip fertigation. No guesswork, no excess.'],
            ['02', 'Protected, not sprayed', 'Insect nets and a controlled environment keep pests out, so crop protection is minimal and need-based, never routine.'],
            ['03', 'Tested, not just trusted', 'Produce is checked for pesticide residue by an accredited lab, and we publish the results.'],
            ['04', 'Traceable to the row', 'Scan any Farmacy pack to see where and when it was harvested.'],
            ['05', 'Every drop counts', "Water goes straight to the root, measured to the drop. In a state facing a groundwater crisis, that matters."],
          ].map(([num, title, text], i, arr) => (
            <FadeIn key={num} delay={i * 0.08} direction='up'>
              <div className={`flex gap-4 py-5 border-t border-[#DCD2BE] ${i === arr.length - 1 ? 'border-b' : ''}`}>
                <span className="font-['Fraunces',_serif] text-xl text-[#8A6420] w-8 flex-shrink-0">{num}</span>
                <div className='flex flex-col gap-1.5'>
                  <span className='text-base font-bold text-[#17261C]'>{title}</span>
                  <span className='text-sm text-[#4A5248] leading-relaxed'>{text}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Traceability */}
      <section className='bg-[#17261C] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#C9DE9E] mb-6'>SCAN. KNOW. TRUST.</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#F5F1E8] leading-[1.15] mb-4">
            Every pack tells you its story.
          </h2>
          <p className='text-sm text-[#D9D2C2] leading-relaxed max-w-xl mb-10'>
            A QR code on every Farmacy pack opens a page like this. No other
            farm in Punjab shows you this much.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} direction='up'>
          <div className='bg-[#F5F1E8] rounded-3xl p-6 max-w-md flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <span className="font-['Fraunces',_serif] text-xl text-[#17261C]">English Cucumber</span>
              <span className='px-3 py-1.5 rounded-2xl bg-[#D9E6BF] text-[#2F4A17] text-[11px] font-bold'>RESIDUE TEST: PASSED</span>
            </div>
            <div className='grid grid-cols-2 gap-3.5'>
              <div className='flex flex-col gap-1'>
                <span className='text-[10px] tracking-[2px] font-bold text-[#6B6455]'>BATCH</span>
                <span className='text-sm font-semibold text-[#17261C]'>FM-S1-0214</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-[10px] tracking-[2px] font-bold text-[#6B6455]'>HARVESTED</span>
                <span className='text-sm font-semibold text-[#17261C]'>14 Feb, 6:40 am</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-[10px] tracking-[2px] font-bold text-[#6B6455]'>GROWN AT</span>
                <span className='text-sm font-semibold text-[#17261C]'>Structure 1, Machhipur</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-[10px] tracking-[2px] font-bold text-[#6B6455]'>FIELD TO PACK</span>
                <span className='text-sm font-semibold text-[#17261C]'>Under 6 hours</span>
              </div>
            </div>
            <Link to='/farmacy-standard' className='h-12 rounded-3xl bg-[#17261C] text-[#F5F1E8] flex items-center justify-center text-sm font-semibold no-underline hover:opacity-90'>
              View lab report
            </Link>
          </div>
          <p className='text-xs text-[#A9A293] mt-3'>Example of a batch page. Details shown are illustrative.</p>
        </FadeIn>
      </section>

      {/* Produce preview */}
      <section id='produce' className='bg-[#F5F1E8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>OUR PRODUCE</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-10">
            Picked at dawn. On your table by dinner.
          </h2>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          {[
            { label: 'PUNJAB', name: 'English Cucumber', text: 'Seedless, thin-skinned, crisp. No peeling needed.', bg: '#D9E6BF', img: null },
            { label: 'PUNJAB', name: 'Coloured Bell Peppers', text: 'Red and yellow, thick-walled, sweet. Hotel and retail grade.', bg: '#D9E6BF', img: null },
            { label: 'ONTARIO', name: 'Greenhouse Tomatoes', text: 'On-the-vine, beefsteak and Roma, grown for Canadian retail.', bg: null, img: '/Canada-farm.jpg' },
          ].map((item) => (
            <FadeIn key={item.name} direction='up'>
              <article className='bg-[#EDE6D8] rounded-[22px] overflow-hidden flex md:flex-col h-full'>
                {item.img ? (
                  <img src={item.img} alt={item.name} className='w-[130px] md:w-full h-full md:h-40 object-cover flex-shrink-0' />
                ) : (
                  <div className='w-[130px] md:w-full flex-shrink-0 md:h-40 flex items-center justify-center p-2.5' style={{ background: item.bg }}>
                    <span className='text-xs font-semibold text-[#3F5A22] text-center'>[{item.name} photo]</span>
                  </div>
                )}
                <div className='p-4.5 flex flex-col gap-1.5'>
                  <span className='text-[10px] tracking-[2px] font-bold text-[#8A6420]'>{item.label}</span>
                  <span className="font-['Fraunces',_serif] text-xl text-[#17261C]">{item.name}</span>
                  <span className='text-[13px] text-[#4A5248] leading-relaxed'>{item.text}</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-3 max-w-md'>
          <Link to='/connect' className='h-[52px] rounded-3xl bg-[#17261C] text-[#F5F1E8] flex items-center justify-center text-sm font-semibold no-underline hover:opacity-90'>
            For my home
          </Link>
          <Link to='/connect' className='h-[52px] rounded-3xl border border-[#17261C] text-[#17261C] flex items-center justify-center text-sm font-semibold no-underline hover:bg-black/5'>
            Retail &amp; hotels
          </Link>
        </div>
      </section>

      {/* Harvest quote break */}
      <section className='relative h-[300px] overflow-hidden'>
        <img src='/about-hero.jpg' alt='Packed tomatoes ready for dispatch' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-[#0F1A13]/45 flex items-end p-6'>
          <p className="font-['Fraunces',_serif] italic text-2xl leading-snug text-[#F5F1E8] max-w-xl">
            "If it's not good enough for Canada's shelves, it's not good enough for Punjab's."
          </p>
        </div>
      </section>

      {/* Grow with Farmacy */}
      <section id='grow' className='bg-[#EDE6D8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>GROW WITH FARMACY</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-6">
            We don't just grow food. We build <em className='italic'>growers.</em>
          </h2>
          <p className='text-base text-[#4A5248] leading-relaxed max-w-2xl mb-10'>
            Punjab's farmers are among the hardest-working in the world.
            What's missing is the system. We hand over the one we built
            across two countries.
          </p>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8'>
          {[
            ['STEP 1 · LEARN', 'Farmacy Academy', 'Hands-on polyhouse and hydroponic training on a working farm. Fertigation, crop scheduling, labour and costing.'],
            ['STEP 2 · BUILD', 'Set up under our supervision', 'Site assessment, structure and vendor selection, subsidy guidance and crop plan, done right the first time.'],
            ['STEP 3 · GROW & SELL', 'Become a Farmacy partner farm', 'Meet the Farmacy Standard and grow under our brand, with [market access terms to be confirmed].'],
          ].map(([step, title, text], i) => (
            <FadeIn key={title} delay={i * 0.1} direction='up'>
              <div className='bg-[#F5F1E8] rounded-[20px] p-5.5 h-full flex flex-col gap-2'>
                <span className='text-[11px] tracking-[2px] font-bold text-[#8A6420]'>{step}</span>
                <span className="font-['Fraunces',_serif] text-xl text-[#17261C]">{title}</span>
                <span className='text-sm text-[#4A5248] leading-relaxed'>{text}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link to='/grow-with-us' className='h-[54px] max-w-xs rounded-3xl bg-[#17261C] text-[#F5F1E8] flex items-center justify-center text-sm font-semibold no-underline hover:opacity-90'>
          Apply to be a partner farm
        </Link>
      </section>

      {/* Visit */}
      <section className='bg-[#F5F1E8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>VISITS BY INVITATION</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-6">
            Don't take our word for it. Come see.
          </h2>
          <p className='text-base text-[#4A5248] leading-relaxed max-w-xl mb-8'>
            Walk the rows, meet the team and taste straight off the vine.
            Every visit, and every meeting with Navi, is by approved
            registration only. No walk-ins.
          </p>
          <Link to='/visit' className='inline-flex h-[54px] px-10 rounded-3xl border border-[#17261C] items-center justify-center text-sm font-semibold no-underline text-[#17261C] hover:bg-black/5'>
            Request a visit
          </Link>
        </FadeIn>
      </section>

      {/* Founder */}
      <section className='bg-[#17261C] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <div className='w-[88px] h-[88px] rounded-full bg-[#2C3D30] flex items-center justify-center mb-6'>
            <span className='text-[10px] font-semibold text-[#C9DE9E] text-center'>[Navi portrait]</span>
          </div>
          <p className="font-['Fraunces',_serif] text-xl md:text-2xl leading-relaxed text-[#F5F1E8] max-w-2xl mb-5">
            "I spent fifteen years learning how the world's best greenhouses
            work. Farmacy is how I bring that home, first to my own village,
            then to every farmer ready to grow with us."
          </p>
          <div className='flex flex-col gap-1'>
            <span className='text-sm font-bold text-[#F5F1E8]'>Navpreet (Navi) Pandher</span>
            <span className='text-[13px] text-[#BDB6A6]'>Founder · Greenhouse grower, Ontario &amp; Punjab</span>
          </div>
        </FadeIn>
      </section>

      {/* Contact doors */}
      <section id='contact' className='bg-[#F5F1E8] px-6 md:px-[72px] py-18 md:py-28'>
        <FadeIn>
          <p className='text-[11px] tracking-[3px] font-bold text-[#8A6420] mb-6'>TALK TO US</p>
          <h2 className="font-['Fraunces',_Georgia,_serif] font-normal text-3xl md:text-5xl text-[#17261C] leading-[1.15] mb-10">
            How can we help?
          </h2>
        </FadeIn>

        <div className='flex flex-col gap-3 max-w-xl'>
          {[
            ['Buy produce', 'Homes, stores, hotels, restaurants', '/connect'],
            ['Partner or train', 'Farmers, landowners, investors', '/grow-with-us'],
            ['Visit the farm or meet Navi', 'By approved registration only', '/visit'],
          ].map(([title, sub, to]) => (
            <Link key={title} to={to} className='bg-[#EDE6D8] rounded-[18px] p-5 flex justify-between items-center no-underline text-[#17261C] hover:bg-[#E2D9C6]'>
              <span className='flex flex-col gap-1'>
                <span className='text-base font-bold'>{title}</span>
                <span className='text-[13px] text-[#4A5248]'>{sub}</span>
              </span>
              <span className='text-xl'>→</span>
            </Link>
          ))}
        </div>
        <p className='text-xs text-[#6B6455] mt-5'>
          Each option opens WhatsApp with a ready-typed message, so we know
          how to help before we reply.
        </p>
      </section>

    </div>
  )
}

export default Home