export const heroCopy = {
  label: "Defense-Tech Atlas",
  name: "พลโท ดร.กริช อินทราทิพย์",
  nameEn: "Lt.Gen. Krich Intratip, Ph.D.",
  headline: "เชื่อมยุทธศาสตร์ ความมั่นคง และ AI Governance สู่การตัดสินใจระดับองค์กรและนโยบาย",
  description:
    "ที่ปรึกษาเชิงยุทธศาสตร์ด้านความมั่นคง เทคโนโลยีดิจิทัล การพัฒนาคน และการกำกับดูแล AI สำหรับองค์กรภาครัฐ การศึกษา และผู้บริหารระดับสูง",
  primaryCta: "ดูประสบการณ์เชิงยุทธศาสตร์",
  secondaryCta: "ติดต่อเพื่อหารือ",
} as const;

export const strategicDomains = [
  {
    title: "ยุทธศาสตร์และความมั่นคง",
    shortTitle: "Strategy",
    description: "เชื่อมนโยบาย ความมั่นคง และการตัดสินใจระดับองค์กร",
    signal: "Policy, defense, cyber",
  },
  {
    title: "AI Governance",
    shortTitle: "AI",
    description: "วางกรอบการใช้ AI อย่างรับผิดชอบ ตรวจสอบได้ และสอดคล้องบริบทไทย",
    signal: "TH-AICF, risk, ethics",
  },
  {
    title: "ระบบและข้อมูล",
    shortTitle: "Systems",
    description: "ออกแบบระบบคิด ระบบงาน และข้อมูลเพื่อยกระดับการตัดสินใจ",
    signal: "Assessment, KM, CQI",
  },
  {
    title: "การพัฒนาคนและผู้นำ",
    shortTitle: "People",
    description: "พัฒนาสมรรถนะ ผู้นำ mindset และวัฒนธรรมการเรียนรู้",
    signal: "Coaching, curriculum, culture",
  },
] as const;

export const profileNarrative = {
  title: "ผู้บริหารยุทธศาสตร์ที่แปลเทคโนโลยีให้เป็นระบบตัดสินใจ",
  paragraphs: [
    "พลโท ดร.กริช อินทราทิพย์ ทำงานบนรอยต่อของความมั่นคง ภาครัฐ การศึกษา และเทคโนโลยีดิจิทัลมากกว่า 20 ปี จุดแข็งไม่ใช่เพียงความรู้ด้าน IT หรือ AI แต่คือความสามารถในการแปลงโจทย์ยุทธศาสตร์ให้เป็นระบบงาน ระบบสมรรถนะ และเครื่องมือประเมินที่องค์กรใช้ตัดสินใจได้จริง",
    "บทบาทปัจจุบันครอบคลุมงานนโยบายเทคโนโลยีสารสนเทศ การสื่อสาร ความมั่นคงไซเบอร์ กิจการทางทหาร และกรอบสมรรถนะ AI ระดับประเทศ การทำงานจึงวางอยู่บนทั้งมุมมองเชิงนโยบายและความเข้าใจภาคปฏิบัติของหน่วยงานรัฐและกองทัพ",
    "แกนกลางของงานคือการเชื่อม Defense-Tech, AI Governance, knowledge management, CQI, PMQA, research methodology และ leadership development ให้เป็นภาษาที่ผู้บริหารใช้กำหนดทิศทาง ลดความเสี่ยง และพัฒนาคนในองค์กรได้อย่างมีน้ำหนัก",
  ],
} as const;

export const profileSignals = [
  { value: "20+", label: "ปีประสบการณ์ด้านระบบ ภาครัฐ และความมั่นคง" },
  { value: "TH-AICF", label: "คณะรับรองพิจารณายกร่างกรอบสมรรถนะ AI" },
  { value: "Ph.D.", label: "เทคโนโลยีสารสนเทศและองค์ความรู้" },
  { value: "Senate", label: "งานนโยบายเทคโนโลยีและความมั่นคง" },
] as const;

export const educationItems = [
  {
    title: "ปรัชญาดุษฎีบัณฑิต สาขาเทคโนโลยีสารสนเทศ",
    meta: "มหาวิทยาลัยศรีปทุม",
  },
  {
    title: "วิทยาศาสตรมหาบัณฑิต สาขาเทคโนโลยีสารสนเทศ",
    meta: "สถาบันเทคโนโลยีพระจอมเกล้าฯ ลาดกระบัง",
  },
  {
    title: "วิทยาศาสตรบัณฑิต วิทยาศาสตร์ทหาร",
    meta: "โรงเรียนนายร้อยพระจุลจอมเกล้า จปร. รุ่นที่ 36",
  },
] as const;

export const competencyDomains = [
  {
    domain: "ยุทธศาสตร์ ความมั่นคง และนโยบาย",
    description: "อ่านโจทย์ระดับประเทศและองค์กร แล้วแปลงเป็นกรอบตัดสินใจที่ผู้บริหารใช้ได้",
    capabilities: ["Strategic Security", "Cyber Policy", "Defense Technology", "Public Policy"],
    proof: "ประสบการณ์ในวุฒิสภา อนุกรรมาธิการด้านกิจการทางทหาร และงานที่ปรึกษากองทัพบก",
    visual: {
      image: "/assets/competencies/strategic-policy.webp",
      alt: "อินโฟกราฟิกแผนที่ยุทธศาสตร์ที่เชื่อมโยงนโยบาย ภารกิจ เทคโนโลยี และผลลัพธ์",
      headline: "แปลงโจทย์ความมั่นคงเป็นกรอบตัดสินใจ",
      metrics: [
        { label: "ระดับ", value: "ประเทศ/องค์กร" },
        { label: "แกนงาน", value: "นโยบาย-ไซเบอร์" },
        { label: "ผลลัพธ์", value: "แผนปฏิบัติ" },
        { label: "หลักฐาน", value: "ภารกิจจริง" },
      ],
      flow: ["อ่านสัญญาณ", "เทียบทางเลือก", "ชี้ผลกระทบ"],
    },
  },
  {
    domain: "AI Governance และ Digital Transformation",
    description: "กำกับการใช้ AI ให้เกิดประโยชน์จริงโดยไม่ทิ้งความเสี่ยง ความรับผิดชอบ และบริบทไทย",
    capabilities: ["TH-AICF", "AI Literacy", "Risk Controls", "Digital Workflow"],
    proof: "ร่วมพิจารณากรอบสมรรถนะ AI แห่งชาติ และพัฒนาระบบประเมินที่ใช้ AI เป็นเครื่องมือ",
    visual: {
      image: "/assets/competencies/ai-governance-digital.webp",
      alt: "อินโฟกราฟิกกรอบกำกับดูแล AI ที่เชื่อมคุณค่า ความเสี่ยง สมรรถนะ และ workflow",
      headline: "ใช้ AI ได้จริง โดยมีกรอบกำกับและจุดคุม",
      metrics: [
        { label: "มาตรฐาน", value: "TH-AICF" },
        { label: "จุดคุม", value: "ความเสี่ยง" },
        { label: "สมรรถนะ", value: "รู้เท่าทัน AI" },
        { label: "ผลลัพธ์", value: "เวิร์กโฟลว์" },
      ],
      flow: ["ตั้งหลักคิด", "คุมความเสี่ยง", "นำไปใช้"],
    },
  },
  {
    domain: "ระบบประเมิน องค์ความรู้ และข้อมูล",
    description: "ออกแบบระบบที่ทำให้องค์กรรู้สถานะของตนเอง วัดผลได้ และพัฒนาต่อเนื่อง",
    capabilities: ["PMQA", "CQI", "Knowledge Management", "Research Assessment"],
    proof: "สร้าง SAR, CQI, PMQA และระบบประเมินโครงการวิจัยหลายรูปแบบ",
    visual: {
      image: "/assets/competencies/assessment-knowledge-data.webp",
      alt: "อินโฟกราฟิกระบบประเมินที่เชื่อมหลักฐาน ข้อมูล องค์ความรู้ และวงจรปรับปรุง",
      headline: "จากหลักฐานและข้อมูล สู่การปรับปรุงต่อเนื่อง",
      metrics: [
        { label: "ระบบ", value: "SAR/PMQA" },
        { label: "วงจร", value: "CQI" },
        { label: "ฐานความรู้", value: "KM" },
        { label: "ผลลัพธ์", value: "แผนยกระดับ" },
      ],
      flow: ["เก็บหลักฐาน", "ประเมินสถานะ", "ปรับปรุงระบบ"],
    },
  },
  {
    domain: "ผู้นำ สมรรถนะ และวัฒนธรรมการเรียนรู้",
    description: "พัฒนาผู้นำและคนในระบบให้พร้อมรับความซับซ้อน ไม่ใช่เพียงรับเครื่องมือใหม่",
    capabilities: ["Executive Coaching", "Mindset", "Curriculum Design", "Learning Culture"],
    proof: "วิทยากรและที่ปรึกษาด้าน leadership, coaching, mindset และหลักสูตรภาครัฐกับการทหาร",
    visual: {
      image: "/assets/competencies/leadership-learning-culture.webp",
      alt: "อินโฟกราฟิกระบบพัฒนาผู้นำที่เชื่อม coaching mindset หลักสูตร และวัฒนธรรมการเรียนรู้",
      headline: "พัฒนาผู้นำให้ขับเคลื่อนระบบได้จริง",
      metrics: [
        { label: "แนวทาง", value: "โค้ชชิ่ง" },
        { label: "แกนคน", value: "Mindset" },
        { label: "หลักสูตร", value: "ออกแบบหลักสูตร" },
        { label: "วัฒนธรรม", value: "การเรียนรู้" },
      ],
      flow: ["เข้าใจตน", "นำทีม", "สร้างวัฒนธรรม"],
    },
  },
] as const;

export const strategicArc = [
  {
    phase: "Policy Command",
    period: "2567 ถึงปัจจุบัน",
    title: "งานนโยบายเทคโนโลยี ความมั่นคงไซเบอร์ และกิจการทางทหาร",
    body: "สนับสนุนการพิจารณาเชิงนโยบายในคณะกรรมาธิการด้านเทคโนโลยีสารสนเทศ การสื่อสาร โทรคมนาคม และอนุกรรมาธิการด้านกิจการทางทหาร ไซเบอร์เทคโนโลยี และอุตสาหกรรมป้องกันประเทศ",
    image: "/assets/experience/policy-command.webp",
    imageAlt: "ภาพจำลองบทบาทที่ปรึกษานโยบายเทคโนโลยีและความมั่นคงไซเบอร์ในห้อง brief ผู้บริหาร",
  },
  {
    phase: "Defense Systems",
    period: "2566 ถึง 2567",
    title: "ผู้ทรงคุณวุฒิและที่ปรึกษากองทัพบก",
    body: "ให้คำปรึกษาด้านกำลังพล เทคโนโลยีสารสนเทศ การบริหารเชิงยุทธศาสตร์ และระบบพัฒนาสมรรถนะที่เชื่อมต่อภารกิจของหน่วยงาน",
    image: "/assets/experience/defense-systems.webp",
    imageAlt: "ภาพจำลองบทบาทที่ปรึกษาระบบกำลังพล เทคโนโลยี และขีดความสามารถของหน่วยงาน",
  },
  {
    phase: "Education & Research",
    period: "2556 ถึง 2560",
    title: "อาจารย์และหัวหน้าวิชาระเบียบวิธีวิจัย",
    body: "บรรยายและออกแบบการเรียนรู้ด้านระเบียบวิธีวิจัย คุณภาพการศึกษา เทคโนโลยีสารสนเทศ และหลักสูตรระดับบัณฑิตศึกษาในบริบททหาร",
    image: "/assets/experience/education-research.webp",
    imageAlt: "ภาพจำลองบทบาทอาจารย์และผู้นำการเรียนรู้ด้านระเบียบวิธีวิจัยในห้องสัมมนา",
  },
  {
    phase: "Knowledge Infrastructure",
    period: "2560 ถึงปัจจุบัน",
    title: "การจัดการความรู้ CQI ระบบประเมิน และ AI Implementation",
    body: "พัฒนาแนวทางและระบบที่ช่วยให้องค์กรประเมินตนเอง เก็บความรู้ ใช้ข้อมูล และนำ AI เข้ามาเสริมการตัดสินใจอย่างเป็นระบบ",
    image: "/assets/experience/knowledge-infrastructure.webp",
    imageAlt: "ภาพจำลองบทบาทออกแบบระบบจัดการความรู้ CQI ระบบประเมิน และ AI implementation",
  },
] as const;

export const publications = [
  "การประยุกต์ใช้กระบวนการ NGT++ ในการสัมมนาเชิงปฏิบัติการ, วารสารเสนาธิปัตย์",
  "แนวคิดการจัดตั้งศูนย์ความเป็นเลิศด้านการวิเคราะห์ข้อมูลและการวิจัยการปฏิบัติการทางทหาร",
  "Stepwise Approach for Applying Coding Method of Grounded Theory to Ontology Design",
  "Stepwise Approach for Improving Ontology using Optimizing Rules",
] as const;

export const initiatives = [
  {
    title: "Marketsverse",
    label: "Digital Market Infrastructure",
    system: "ระบบนิเวศตลาดดิจิทัลสำหรับ niche market ที่ต้องการพื้นที่และเครื่องมือของตนเอง",
    problem: "ตลาดเฉพาะทางจำนวนมากถูกบังคับให้แข่งขันในแพลตฟอร์ม mass ที่ไม่เข้าใจภาษา ความเชี่ยวชาญ และรูปแบบความเชื่อใจของชุมชน",
    impact: "สร้างโครงสร้างพื้นฐานที่ช่วยให้ชุมชนตลาดเฉพาะทางจัดการสินค้า ความรู้ ผู้ขาย ผู้ซื้อ และข้อมูลเชิงลึกได้อย่างเป็นระบบ",
    tags: ["Niche Market", "AI Matching", "Digital Infrastructure", "Community Commerce"],
    link: "https://www.marketsverse.app",
    image: "/assets/initiatives/marketsverse-about02-card.webp",
    imageAlt: "ภาพวิสัยทัศน์ Marketsverse ที่เชื่อมตลาดเฉพาะทาง ชุมชน เทคโนโลยี AI และเศรษฐกิจชุมชน",
    featured: true,
  },
  {
    title: "PMQA-ISOC Platform",
    label: "Public Sector Assessment",
    system: "ระบบประเมิน PMQA 4.0 ที่ช่วยให้หน่วยงานเห็นระดับการพัฒนาและช่องว่างเชิงระบบ",
    problem: "การประเมินคุณภาพภาครัฐมักติดอยู่กับเอกสารและการตีความเกณฑ์ที่ไม่สม่ำเสมอ",
    impact: "ช่วยจัดโครงสร้างหลักฐาน วิเคราะห์ผล และแปลงเกณฑ์คุณภาพเป็น roadmap เพื่อการปรับปรุง",
    tags: ["PMQA", "AI Analytics", "Assessment"],
    link: "https://pmqa-isoc.vercel.app",
    image: "/assets/initiatives/pmqa-isoc.webp",
    imageAlt: "แดชบอร์ดประเมิน PMQA พร้อมเอกสารหลักฐานและกราฟวิเคราะห์ผล",
  },
  {
    title: "Academic SAR",
    label: "Research Quality System",
    system: "ระบบรีวิวงานวิจัยด้วย AI หลายบทบาทสำหรับงานวิชาการระดับบัณฑิตศึกษา",
    problem: "ผู้วิจัยต้องการ feedback ที่แยกมิติวิธีวิจัย ทฤษฎี และการเขียนอย่างเป็นระบบ",
    impact: "ช่วยให้ผู้วิจัยมองเห็นจุดแข็ง จุดเสี่ยง และแนวทางปรับปรุงก่อนส่งงานจริง",
    tags: ["Research", "Multi-Agent Review", "Academic Quality"],
    link: "https://academic-sar.pk-research.work/",
    image: "/assets/initiatives/academic-sar.webp",
    imageAlt: "เอกสารวิทยานิพนธ์และหน้าจอรีวิวงานวิชาการด้วยผู้เชี่ยวชาญ AI หลายบทบาท",
  },
  {
    title: "Research Proposal SAR",
    label: "Strategic Screening",
    system: "ระบบประเมินข้อเสนอโครงการวิจัยผ่านผู้ทรงคุณวุฒิ AI หลายมิติ",
    problem: "ข้อเสนอโครงการต้องถูกประเมินทั้งด้านยุทธศาสตร์ เทคนิค วิธีวิจัย และความคุ้มค่า",
    impact: "ทำให้การกลั่นกรองมีกรอบชัดเจน ตรวจซ้ำได้ และช่วยผู้เสนอปรับโจทย์ให้แข็งแรงขึ้น",
    tags: ["Proposal", "Research Governance", "AI Review"],
    link: "https://proposal-sar.pk-research.work/",
    image: "/assets/initiatives/proposal-sar.webp",
    imageAlt: "ระบบคัดกรองข้อเสนอโครงการวิจัยพร้อม pipeline และ scorecard หลายมิติ",
  },
  {
    title: "CQI Self-Assessment",
    label: "Knowledge Improvement",
    system: "ระบบประเมิน CQI และ Knowledge Management ด้วยตนเอง",
    problem: "หน่วยงานจำนวนมากมีโครงการพัฒนาคุณภาพ แต่ขาดเครื่องมือสะท้อนสถานะและบทเรียน",
    impact: "ช่วยให้ทีมเห็นวงจร improvement, evidence และสิ่งที่ต้องยกระดับในรอบถัดไป",
    tags: ["CQI", "KM", "Self-Assessment"],
    link: "https://cqi-sar.vercel.app",
    image: "/assets/initiatives/cqi-sar.webp",
    imageAlt: "กระดาน CQI และ knowledge management พร้อมหลักฐานการปรับปรุงและวงจรพัฒนา",
  },
] as const;

export const advisoryServices = [
  {
    title: "AI Governance สำหรับผู้บริหาร",
    outcome: "กำหนดหลักคิด นโยบาย ความเสี่ยง และสมรรถนะที่องค์กรต้องมี ก่อนนำ AI ไปใช้ในงานจริง",
    formats: ["Executive briefing", "Policy workshop", "AI competency roadmap"],
    image: "/assets/advisory/ai-governance-executive.webp",
    imageAlt: "ห้องประชุมผู้บริหารพร้อมหน้าจอวิเคราะห์ AI governance และแผนความเสี่ยง",
  },
  {
    title: "ระบบประเมินและการตัดสินใจเชิงข้อมูล",
    outcome: "ออกแบบเกณฑ์ ระบบ SAR, PMQA, CQI หรือ research assessment ที่ใช้ข้อมูลและหลักฐานเป็นฐาน",
    formats: ["Assessment design", "SAR platform", "Evaluation framework"],
    image: "/assets/advisory/data-decision-system.webp",
    imageAlt: "ห้องประชุมพร้อมแดชบอร์ดข้อมูลและเอกสารประเมินสำหรับการตัดสินใจ",
  },
  {
    title: "Defense-Tech และความมั่นคงไซเบอร์",
    outcome: "เชื่อมมุมมองนโยบาย ภารกิจ และเทคโนโลยีให้เป็นกรอบตัดสินใจสำหรับหน่วยงานด้านความมั่นคง",
    formats: ["Strategic advisory", "Scenario workshop", "Capability mapping"],
    image: "/assets/advisory/defense-tech-cyber.webp",
    imageAlt: "ศูนย์ปฏิบัติการความมั่นคงไซเบอร์พร้อมแผนที่ประเทศไทยและระบบวิเคราะห์",
  },
  {
    title: "Executive Coaching และ Leadership Development",
    outcome: "พัฒนาผู้นำให้เข้าใจตนเอง ทีม และแรงต้านขององค์กร เพื่อขับเคลื่อนการเปลี่ยนแปลงอย่างมีวุฒิภาวะ",
    formats: ["Executive coaching", "Mindset workshop", "Learning culture program"],
    image: "/assets/advisory/executive-coaching-leadership.webp",
    imageAlt: "ห้องสนทนาผู้บริหารสำหรับ coaching พร้อมบรรยากาศสงบและแผนผังการพัฒนา",
  },
] as const;

export const trustProofs = [
  {
    title: "งานนโยบายและกรรมาธิการ",
    body: "ประสบการณ์ในประเด็นเทคโนโลยีสารสนเทศ โทรคมนาคม ความมั่นคงไซเบอร์ และกิจการทางทหาร",
  },
  {
    title: "งานวิจัยและวารสารวิชาการ",
    body: "ผลงานด้าน ontology, grounded theory, operational research และความรู้เชิงระบบ",
  },
  {
    title: "การพัฒนาผู้นำและสมรรถนะ",
    body: "เครื่องมือ coaching, Enneagram, MBTI, Satir, Voice Dialogue และการออกแบบหลักสูตร",
  },
] as const;

export const contactIntents = [
  "ที่ปรึกษาเชิงยุทธศาสตร์",
  "วิทยากรหรือ workshop ผู้บริหาร",
  "กรรมการหรือคณะทำงานด้าน AI และเทคโนโลยี",
  "ออกแบบระบบประเมินหรือหลักสูตร",
] as const;
