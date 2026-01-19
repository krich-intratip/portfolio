'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen } from 'lucide-react';

const timelineData = [
    {
        year: "2020 - Present",
        title: "Knowledge Manager & AI Implementation Specialist",
        organization: "Royal Thai Army Research and Development Office",
        type: "career",
        description: "พัฒนาระบบ Self-Assessment และบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์"
    },
    {
        year: "2023",
        title: "Ph.D. in Information Technology",
        organization: "Sripatum University",
        type: "education",
        description: "ระเบียบวิธีการแปลงความรู้จากแบบจาลองทฤษฎีฐานรากและแบบจาลองสมการโครงสร้างเป็นความรู้ในรูปแบบออนโทโลยี (A Methodology of Transforming Knowledge from Grounded Theory and Structural Equation Modeling to Ontology-Based Knowledge)"
    },
    {
        year: "2018",
        title: "คณะทำงานพัฒนาสมรรถนะด้านดิจิทัล",
        organization: "สำนักงาน ก.พ. / สคช.",
        type: "career",
        description: "พัฒนาสมรรถนะด้านดิจิทัลสำหรับข้าราชการและบุคลากรภาครัฐ"
    },
    {
        year: "2015",
        title: "M.Sc. in Information Technology",
        organization: "King Mongkut's Institute of Technology Ladkrabang",
        type: "education",
        description: "เชี่ยวชาญด้าน Information Systems และ Software Engineering"
    },
    {
        year: "2013-2014",
        title: "วิทยากรจัดทำยุทธศาสตร์และวิสัยทัศน์",
        organization: "กองทัพบก (ตามมาตรฐาน ก.พ.ร. / PMQA)",
        type: "career",
        description: "ดำเนินการจัดทำยุทธศาสตร์และวิสัยทัศน์ให้หน่วยต่าง ๆ ของกองทัพบก"
    },
    {
        year: "2010",
        title: "International Conference Publication",
        organization: "KICSS 2010",
        type: "publication",
        description: "Stepwise Approach for Improving Ontology using Optimizing Rules (ตีพิมพ์ในการประชุมวิชาการนานาชาติ)"
    },
    {
        year: "2005",
        title: "B.Sc. Military Science",
        organization: "Chulachomklao Royal Military Academy",
        type: "education",
        description: "สำเร็จการศึกษาจากโรงเรียนนายร้อยพระจุลจอมเกล้า"
    },
    {
        year: "2003-2005",
        title: "หัวหน้าโครงการวิจัยระบบจำลองยุทธ์ทางทหาร (ATLAS)",
        organization: "กองทัพบก",
        type: "career",
        description: "รับรางวัลดีเยี่ยมโครงการวิจัยด้านหลักการและนายทหารโครงการดีเด่น"
    },
    {
        year: "2001-2002",
        title: "คณะทำงานโครงการรัฐบาลอิเล็กทรอนิกส์",
        organization: "สำนักนายกรัฐมนตรี",
        type: "career",
        description: "พัฒนาระบบรัฐบาลอิเล็กทรอนิกส์ระดับชาติ"
    }
];

const publicationData = [
    {
        year: "2015",
        title: "การประยุกต์ใช้กระบวนการ NGT++ ในการสัมมนาเชิงปฏิบัติการ",
        journal: "วารสารเสนาธิปัตย์ ปีที่ 64 ฉบับที่ 2",
        type: "บทความวิชาการ"
    },
    {
        year: "2015",
        title: "แนวคิดการจัดตั้งศูนย์ความเป็นเลิศด้านการวิเคราะห์ข้อมูล/การวิจัยการปฏิบัติการทางทหาร กองทัพบก",
        journal: "วารสารเสนาธิปัตย์ ปีที่ 64 ฉบับที่ 1",
        type: "บทความวิชาการ"
    },
    {
        year: "2013",
        title: "Stepwise Approach for Applying Coding Method of Grounded Theory to Ontology Design",
        journal: "JCIT: Journal of Convergence Information Technology, Vol. 8, No. 15, pp. 23~32",
        type: "วารสารนานาชาติ"
    },
    {
        year: "2010",
        title: "Stepwise Approach for Improving Ontology using Optimizing Rules",
        journal: "The Fifth International Conference on Knowledge, Information and Creativity Support Systems (KICSS 2010)",
        type: "การประชุมวิชาการนานาชาติ"
    }
];

const getIconAndColor = (type: string) => {
    switch (type) {
        case 'career':
            return {
                icon: Briefcase,
                bgColor: 'bg-sky-500/20 border-sky-500',
                badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
                iconColor: 'text-sky-400'
            };
        case 'education':
            return {
                icon: GraduationCap,
                bgColor: 'bg-indigo-500/20 border-indigo-500',
                badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
                iconColor: 'text-indigo-400'
            };
        case 'publication':
            return {
                icon: BookOpen,
                bgColor: 'bg-amber-500/20 border-amber-500',
                badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
                iconColor: 'text-amber-400'
            };
        default:
            return {
                icon: Briefcase,
                bgColor: 'bg-sky-500/20 border-sky-500',
                badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
                iconColor: 'text-sky-400'
            };
    }
};

const getTypeLabel = (type: string) => {
    switch (type) {
        case 'career': return 'Career';
        case 'education': return 'Education';
        case 'publication': return 'Publication';
        default: return 'Career';
    }
};

export default function Timeline() {
    return (
        <section id="timeline" className="py-20">
            <div className="container mx-auto px-6">
                {/* Career Journey Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Career Journey
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        ประสบการณ์การทำงานและการศึกษากว่า 20 ปี
                    </p>

                    <div className="max-w-4xl mx-auto mb-20">
                        {timelineData.map((item, index) => {
                            const { icon: Icon, bgColor, badgeColor, iconColor } = getIconAndColor(item.type);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    className="relative pl-8 pb-12 border-l-2 border-slate-800 last:pb-0"
                                >
                                    {/* Timeline Icon */}
                                    <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center ${bgColor} border-2`}>
                                        <Icon size={14} className={iconColor} />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors ml-4">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeColor} border`}>
                                                {item.year}
                                            </span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400">
                                                {getTypeLabel(item.type)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sky-400 font-medium mb-3">
                                            {item.organization}
                                        </p>
                                        <p className="text-slate-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Publications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                        Academic Publications
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        ผลงานตีพิมพ์ทางวิชาการและการประชุมวิชาการ
                    </p>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {publicationData.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                                        <BookOpen size={20} className="text-amber-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-1 text-xs font-semibold rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                                {pub.year}
                                            </span>
                                            <span className="px-2 py-1 text-xs font-medium rounded bg-slate-800 text-slate-400">
                                                {pub.type}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-2 leading-snug text-sm">
                                            {pub.title}
                                        </h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {pub.journal}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
