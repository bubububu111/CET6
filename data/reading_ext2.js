/* 六级阅读扩展素材包 2 —— 补充仔细阅读 + 选词填空 + 信息匹配
 * 来源：六级真题风格改编，2016-2026年热点话题
 */
(function () {
  if (!window.CET6_READING) return;

  /* ===== 补充仔细阅读 ===== */
  var extCareful = [
    {
      id: "rc9", title: "仔细阅读 9：数字经济与共享商业模式", cat: "经济",
      text: "The digital economy has transformed how goods and services are exchanged, giving rise to what is commonly called the sharing economy. Platforms connect people who have resources with those who need them, from ride-sharing and home rentals to freelance work and tool libraries. What began as a niche idea has grown into a global industry worth hundreds of billions of dollars.\n\nThe appeal is straightforward. Owners monetize underused assets—an extra bedroom, a car sitting in a driveway, spare time after work. Consumers gain access to services at lower prices than traditional providers offer. Cities benefit from reduced vehicle ownership and more efficient use of existing infrastructure. Proponents argue that sharing, rather than owning, is both economically rational and environmentally friendly.\n\nYet the model has drawn sharp criticism. Workers on gig platforms often lack the employment protections that come with traditional jobs—health insurance, retirement benefits, minimum wage guarantees. A driver who works sixty hours a week may still struggle to cover basic expenses after platform fees and vehicle costs. Regulators worldwide are debating whether these workers should be classified as employees or independent contractors.\n\nThere are also concerns about market concentration and consumer protection. A small number of dominant platforms control most of the traffic in their sectors, allowing them to set prices and terms unilaterally. Home-sharing platforms, meanwhile, have been blamed for reducing the supply of long-term housing in popular cities, pushing rents higher for local residents.\n\nThe sharing economy is also evolving. Many platforms that began as peer-to-peer marketplaces now increasingly rely on professional providers. What was once framed as a movement of neighbors sharing resources has begun to look more like traditional business, simply conducted through a smartphone app.\n\nThe long-term impact will depend on how societies adapt regulation. If rules ensure fair treatment of workers and genuine competition, the digital sharing model could deliver on its promise of efficiency and flexibility. Without such safeguards, it risks becoming just another way to shift risk from companies onto individuals.",
      words: ["monetize v. 变现，货币化", "niche n. 小众市场 adj. 专营的", "freelance adj. 自由职业的", "proponent n. 支持者", "gig n. 零工", "regulator n. 监管者", "unilaterally adv. 单方面地"],
      questions: [
        { q: "What is the main appeal of the sharing economy for asset owners?", opts: ["They pay lower taxes.", "They can monetize underused assets like extra rooms or cars.", "They get free insurance.", "They meet more neighbors."], a: 1, ex: "第二段：所有者可以将闲置资产变现，如空余卧室、停在车库的车等。" },
        { q: "What is a major criticism of gig platform work?", opts: ["Workers earn too much money.", "Workers often lack employment protections like health insurance and minimum wage.", "Workers have too many holidays.", "Workers cannot choose their hours."], a: 1, ex: "第三段：零工平台工人往往缺乏传统工作的就业保障，如医保、退休金和最低工资保障。" },
        { q: "Why have home-sharing platforms been criticized in popular cities?", opts: ["They are too expensive for tourists.", "They reduce long-term housing supply and push rents higher.", "They make hotels more popular.", "They cause traffic jams."], a: 1, ex: "第四段：短租平台被指责减少了热门城市的长期住房供应，推高了当地房租。" },
        { q: "How is the sharing economy evolving according to the passage?", opts: ["It is disappearing completely.", "It is shifting from peer-to-peer to more professional providers.", "It is only used by students now.", "It has been banned in most countries."], a: 1, ex: "第五段：许多最初是点对点的平台现在越来越依赖专业供应商。" },
        { q: "What determines the long-term impact of the sharing economy?", opts: ["The weather", "How societies adapt regulation to ensure fair treatment and competition", "The price of smartphones", "The decline of traditional businesses"], a: 1, ex: "末段：长远影响取决于社会如何调整监管，确保公平待遇和真正竞争。" }
      ]
    },
    {
      id: "rc10", title: "仔细阅读 10：元宇宙与虚拟现实的未来", cat: "科技",
      text: "The metaverse, a term describing a persistent virtual world where people work, play and socialize through digital avatars, has moved from science fiction into serious business planning. Technology companies have invested tens of billions of dollars in virtual reality (VR) and augmented reality (AR) headsets, 3D platforms and related infrastructure.\n\nVR technology has made remarkable progress. Modern headsets offer high-resolution displays, precise motion tracking and increasingly realistic graphics that can trick the brain into feeling present in a digital environment. Users can attend concerts, walk through virtual museums or collaborate with colleagues in digital meeting rooms—all from their living rooms.\n\nAR, which overlays digital information onto the physical world, may have even broader everyday applications. Glasses that display navigation directions, translate foreign-language signs or provide repair instructions could transform how people interact with their surroundings. Education, manufacturing and healthcare are among the industries testing AR solutions.\n\nYet significant barriers remain. Motion sickness affects a substantial number of users, especially during longer sessions. The cost of high-end equipment remains out of reach for most consumers. Perhaps most importantly, no one has yet found a killer app—an experience so compelling that everyone feels they must have it. For many people, putting on a headset for hours a day still feels awkward and isolating.\n\nPrivacy and safety concerns add another layer of doubt. Virtual spaces collect enormous amounts of data about users' movements, gaze patterns and social interactions. Bad actors can use immersive environments for harassment or fraud in ways that feel more real and damaging than traditional online abuse.\n\nThe future of the metaverse is unlikely to match the most enthusiastic predictions, but it would be wrong to dismiss it entirely. Rather than a single all-encompassing virtual world, what may emerge is a spectrum of mixed-reality experiences that gradually weave digital layers into ordinary life. The technology will find its place not by replacing reality but by augmenting it in ways that prove genuinely useful.",
      words: ["avatar n. 化身", "persistent adj. 持久的", "augmented adj. 增强的", "immersive adj. 沉浸式的", "harassment n. 骚扰", "spectrum n. 范围，频谱", "weave v. 编织"],
      questions: [
        { q: "What is the metaverse according to the passage?", opts: ["A new type of computer", "A persistent virtual world where people work, play and socialize through digital avatars", "A video game console", "A social media website"], a: 1, ex: "第一段：元宇宙是指人们通过数字化身在其中工作、娱乐和社交的持久虚拟世界。" },
        { q: "What does AR do according to the passage?", opts: ["It completely replaces the physical world.", "It overlays digital information onto the physical world.", "It improves internet speed.", "It reduces screen time."], a: 1, ex: "第三段：增强现实（AR）将数字信息叠加在物理世界之上。" },
        { q: "What is one significant barrier to widespread VR adoption?", opts: ["Motion sickness affecting many users", "Lack of color displays", "Too many killer apps", "Headsets are too light"], a: 0, ex: "第四段：晕动症影响相当多的用户，尤其是长时间使用时。" },
        { q: "Why are privacy concerns raised about virtual spaces?", opts: ["Virtual spaces collect enormous amounts of user data including movements and gaze patterns", "Virtual spaces are too dark", "Virtual spaces charge high fees", "Virtual spaces require passwords"], a: 0, ex: "第五段：虚拟空间收集大量用户数据，包括动作、视线轨迹和社交互动。" },
        { q: "What does the author conclude about the future of the metaverse?", opts: ["It will completely replace reality.", "It will match all enthusiastic predictions.", "It will likely emerge as a spectrum of mixed-reality experiences that augment real life.", "It will disappear completely within five years."], a: 2, ex: "末段：未来更可能是一系列混合现实体验逐渐将数字层面融入日常生活，而非完全取代现实。" }
      ]
    },
    {
      id: "rc11", title: "仔细阅读 11：碳中和转型的挑战与机遇", cat: "环境",
      text: "Carbon neutrality—the goal of balancing carbon dioxide emissions with removal so that net emissions reach zero—has become a central target for governments and corporations worldwide. More than one hundred countries have pledged to achieve carbon neutrality by 2050, setting in motion the largest economic transformation since the Industrial Revolution.\n\nThe energy sector sits at the heart of this transition. Electricity generation, which currently relies heavily on coal, oil and natural gas, must shift toward renewable sources such as solar, wind, hydro and nuclear power. The cost of solar panels and wind turbines has fallen dramatically in the past decade, making renewables increasingly competitive with fossil fuels.\n\nYet the path is far from smooth. Renewable energy depends on weather conditions—the sun does not always shine and the wind does not always blow. Building enough battery storage and grid transmission capacity to handle this intermittency requires massive investment. Heavy industries like steel and cement production, which account for a significant share of emissions, have no easy low-carbon alternatives.\n\nThe transition also raises questions of fairness. Developing countries argue that wealthy nations, which built their prosperity on fossil fuels, should bear the largest burden and provide financial and technical support to poorer nations. Within countries, workers in fossil fuel industries risk losing their livelihoods unless governments invest in retraining and economic development in affected regions.\n\nOn the positive side, the green transition is creating enormous new opportunities. Renewable energy installation, electric vehicle manufacturing and energy efficiency retrofitting are among the fastest-growing job categories. Countries that lead in green technology may gain competitive advantages in the global economy of the future.\n\nThe pace of change will ultimately be determined not by technology alone but by political will and public support. The choices made in the next decade will shape the climate for centuries. Achieving carbon neutrality on schedule will require innovation, investment and international cooperation on an unprecedented scale.",
      words: ["neutrality n. 中立，中性", "pledge v. 承诺", "intermittency n. 间歇性", "retrofit v. 改造", "cement n. 水泥", "livelihood n. 生计", "unprecedented adj. 史无前例的"],
      questions: [
        { q: "What is carbon neutrality according to the passage?", opts: ["Producing zero energy", "Balancing carbon emissions with removal so net emissions reach zero", "Banning all cars", "Planting only trees"], a: 1, ex: "第一段：碳中和是指通过平衡碳排放与碳移除，使净排放量达到零的目标。" },
        { q: "Why has renewable energy become more competitive?", opts: ["Governments banned fossil fuels", "The cost of solar panels and wind turbines has fallen dramatically", "Renewables work in all weather", "Oil became too heavy"], a: 1, ex: "第二段：太阳能板和风力涡轮机的成本在过去十年大幅下降。" },
        { q: "What is a major challenge for renewable energy?", opts: ["It is too expensive", "It depends on weather conditions and requires storage solutions", "It produces too much energy", "No one wants to use it"], a: 1, ex: "第三段：可再生能源依赖天气条件，需要足够的储能和电网传输能力。" },
        { q: "What is the fairness concern raised by developing countries?", opts: ["They have too much money", "Wealthy nations should bear the largest burden since they built prosperity on fossil fuels", "They do not want renewable energy", "They want to produce more emissions"], a: 1, ex: "第四段：发展中国家认为富裕国家靠化石燃料实现了繁荣，应承担最大的减排责任。" },
        { q: "What does the author say will ultimately determine the pace of the transition?", opts: ["Technology alone", "Political will and public support", "Weather patterns", "Corporate profits only"], a: 1, ex: "末段：变革的速度最终不仅取决于技术，更取决于政治意愿和公众支持。" }
      ]
    },
    {
      id: "rc12", title: "仔细阅读 12：内卷与年轻人的压力", cat: "社会",
      text: "Involution, or neijuan in Chinese, has become one of the most discussed social terms among young people in recent years. It describes a situation where people compete intensely for diminishing returns, putting in ever greater effort without improving their position relative to others. The term resonates strongly with a generation facing rising education costs, fierce job competition and soaring housing prices.\n\nThe phenomenon is most visible in education. Children as young as six attend after-school tutoring and weekend classes, not because they are falling behind but because everyone else is doing it. Parents spend a large share of household income on supplementary education, hoping to give their child an edge in a system where university places remain limited despite rapid expansion.\n\nThe workplace shows similar patterns. Many young professionals work long hours in what is known as the 996 schedule—9 a.m. to 9 p.m., six days a week. Even when overtime is not officially required, leaving the office before colleagues is often seen as a sign of lack of dedication. The result is widespread burnout and declining mental health among younger workers.\n\nSome young people have responded by embracing what they call tang ping, or lying flat. This philosophy rejects the relentless pursuit of career advancement and material success in favor of a simpler, lower-pressure lifestyle. Supporters see it as a form of quiet resistance against an overly competitive society. Critics argue it risks creating a generation that opts out of economic and social participation.\n\nThe underlying causes are deeply structural. Slowing economic growth, a mismatch between educational output and labor market needs, and a social security system still under development all contribute to the pressure young people feel. Cultural expectations that link personal worth to academic and professional achievement add another layer.\n\nAddressing involution will require more than individual attitude changes. Expanding quality education, reforming workplace norms and strengthening social safety nets would help reduce the pressure to overcompete. Until then, the tension between ambition and exhaustion is likely to remain a defining feature of young adult life.",
      words: ["involution n. 内卷", "resonate v. 共鸣", "supplementary adj. 补充的", "burnout n. 倦怠", "relentless adj. 不懈的", "structural adj. 结构性的", "opt out 退出，不参与"],
      questions: [
        { q: "What does involution (neijuan) describe according to the passage?", opts: ["Economic growth", "Intense competition for diminishing returns without improving relative position", "A type of exercise", "Population decline"], a: 1, ex: "第一段：内卷描述的是人们为递减回报激烈竞争，投入更多努力却无法改善相对地位的状况。" },
        { q: "Why do young children attend after-school tutoring according to the passage?", opts: ["Because they are falling behind", "Because everyone else is doing it and parents want to give them an edge", "Because school is too easy", "Because teachers force them"], a: 1, ex: "第二段：孩子们参加课外辅导不是因为落后，而是因为其他人都在参加，父母希望给孩子竞争优势。" },
        { q: "What is the 996 work schedule?", opts: ["9 hours per week, 9 weeks per year", "9 a.m. to 9 p.m., six days a week", "9 minutes of work per day", "9 days of vacation per year"], a: 1, ex: "第三段：996 是指早9点到晚9点、每周六天的工作模式。" },
        { q: "What is the tang ping (lying flat) philosophy?", opts: ["Working harder than everyone else", "Rejecting relentless career pursuit in favor of a simpler lifestyle", "Sleeping more than 12 hours a day", "Quitting all education"], a: 1, ex: "第四段：躺平哲学拒绝对职业发展和物质成功的不懈追求，转而选择更简单、压力更小的生活方式。" },
        { q: "What does the author say is needed to address involution?", opts: ["Only individual attitude changes", "Expanding quality education, reforming workplace norms and strengthening social safety nets", "Banning all after-school classes", "Forcing everyone to work longer hours"], a: 1, ex: "末段：解决内卷需要扩大优质教育、改革职场规范和加强社会保障网。" }
      ]
    },
    {
      id: "rc13", title: "仔细阅读 13：考研热与教育选择的多元化", cat: "教育",
      text: "The number of students taking the national postgraduate entrance exam in China has surged dramatically, reaching nearly five million applicants in recent years. This so-called kaoyan fever reflects a combination of economic pressure, educational ambition and shifting attitudes toward what constitutes sufficient preparation for the job market.\n\nSeveral factors drive the trend. First, as undergraduate enrollment has expanded greatly over the past two decades, a bachelor's degree no longer distinguishes job candidates as it once did. Many students believe a master's degree is now necessary simply to stand out in a crowded employment market. Second, during periods of economic uncertainty, pursuing further education can seem like a safer option than entering a competitive job market directly.\n\nThird, some fields genuinely require advanced training. Scientific research, university teaching, certain medical specialties and high-level engineering positions typically demand postgraduate qualifications. For students aiming at these careers, graduate school is not a choice but a necessity.\n\nYet the craze carries risks. Many students invest years preparing for and completing advanced degrees only to find that the job market has not kept pace. Some end up in positions that do not require their level of education, raising questions about whether the time and money were well spent. The intense competition also takes a toll on mental health, with high rates of anxiety and depression reported among exam takers.\n\nAn alternative that is gaining attention is vocational education. China has been expanding its vocational training system, emphasizing practical skills that align with industry needs. Graduates of vocational programs often find employment quickly, and some earn salaries comparable to university graduates. The government has promoted vocational education as part of a strategy to build a highly skilled workforce.\n\nThe ideal outcome may be greater diversity in educational paths. Not every student needs a master's degree, just as not every student is suited for vocational training. A healthy education system should offer multiple routes to success, allowing individuals to choose paths that match their interests, abilities and career goals rather than following a single, increasingly competitive track.",
      words: ["postgraduate adj. 研究生的", "surge v. 激增", "undergraduate n. 本科生", "bachelor n. 学士", "craze n. 狂热", "vocational adj. 职业的", "align v. 对齐，匹配"],
      questions: [
        { q: "Why has a bachelor's degree become less valuable in the job market?", opts: ["Because degrees are now free", "Because undergraduate enrollment expanded greatly, making degrees less distinctive", "Because employers hate degrees", "Because bachelor's programs take too long"], a: 1, ex: "第二段：过去二十年本科大幅扩招，学士学位不再像以前那样让求职者脱颖而出。" },
        { q: "Why is graduate school necessary for some fields?", opts: ["Because it is easy", "Because fields like scientific research, medical specialties and high-level engineering demand advanced qualifications", "Because graduate school costs nothing", "Because employers cannot read undergraduate diplomas"], a: 1, ex: "第三段：科研、高校教学、某些医学专业和高级工程岗位通常要求研究生学历。" },
        { q: "What is a risk mentioned about pursuing advanced degrees?", opts: ["Students always earn too much money", "Many find the job market has not kept pace and positions may not require their education level", "Graduate school is too short", "Students have too much free time"], a: 1, ex: "第四段：许多学生投入多年时间攻读高学位后发现就业市场未能同步增长，有些最终从事的工作并不需要其学历水平。" },
        { q: "What is an alternative to traditional university education that is gaining attention?", opts: ["Unemployment", "Vocational education emphasizing practical skills aligned with industry needs", "Traveling the world", "Watching online videos"], a: 1, ex: "第五段：职业教育作为另一种选择越来越受关注，强调与行业需求匹配的实用技能。" },
        { q: "What does the author suggest a healthy education system should provide?", opts: ["Only one path to success", "Multiple routes to success matching individual interests, abilities and career goals", "Only graduate degrees", "Only vocational training"], a: 1, ex: "末段：健康的教育体系应该提供多种成功路径，让个人选择符合自身兴趣、能力和职业目标的道路。" }
      ]
    }
  ];

  /* ===== 补充选词填空 ===== */
  var extCloze = [
    {
      id: "cl3", title: "选词填空 3：心理健康的重要性", cat: "健康",
      text: "Mental health, long {{1}} in many societies as a secondary concern, is now receiving the attention it deserves. The World Health Organization estimates that one in eight people globally lives with a mental disorder, yet millions go without the support they need.\n\nThe {{2}} of poor mental health extend far beyond individual suffering. They {{3}} into workplaces, where stress and anxiety reduce productivity and increase absenteeism. They affect families, straining relationships and affecting children's development. And they impose enormous economic costs on healthcare systems and societies at large.\n\nSeveral factors have {{4}} to the rising awareness. The pandemic served as a catalyst, as isolation, fear and economic uncertainty {{5}} mental health struggles for millions. Celebrities and public figures sharing their own experiences have also helped {{6}} stigma, making it easier for ordinary people to seek help.\n\nPrevention is gaining emphasis alongside treatment. Schools are introducing mental health {{7}} to teach emotional literacy and coping skills. Employers are offering wellness programs and flexible work arrangements to {{8}} burnout. Community organizations are training volunteers to recognize signs of distress and offer {{9}} support.\n\nStill, significant gaps remain. Access to professional care is {{10}} in many rural and low-income areas. Cultural barriers prevent some from seeking help. Closing these gaps will require sustained investment, policy commitment and continued public education.",
      options: [
        "A) worsening", "B) contribute", "C) treated", "D) spill", "E) impacts",
        "F) literacy", "G) regarded", "H) particularly", "I) limited", "J) worsened",
        "K) reduce", "L) initial", "M) programs", "N) peer", "O) ease"
      ],
      answers: ["G", "E", "D", "B", "J", "K", "M", "O", "N", "I"],
      explanations: {
        1: "regarded as 被视为，固定搭配，指长期被视为次要问题。",
        2: "impacts 影响，名词复数，指心理健康问题的影响远超个人痛苦。",
        3: "spill into 蔓延到，动词，表示影响扩散到工作场所。",
        4: "contributed to 促成，现在完成时，指多个因素促成了意识提升。",
        5: "worsened 使恶化，动词过去式，指疫情使数百万人的心理健康问题恶化。",
        6: "reduce stigma 减少污名化，不定式结构。",
        7: "mental health programs 心理健康项目/课程。",
        8: "ease burnout 缓解倦怠，不定式表目的。",
        9: "peer support 同伴支持，固定搭配。",
        10: "limited 有限的，形容词，指许多农村和低收入地区获得专业护理的机会有限。"
      }
    },
    {
      id: "cl4", title: "选词填空 4：科技创新的驱动力", cat: "科技",
      text: "Technological innovation has reshaped every aspect of modern life, yet the conditions that {{1}} it are not always well understood. Innovation does not happen by accident; it emerges from specific environments, investments and cultural attitudes that {{2}} risk-taking and experimentation.\n\nResearch and development (R&D) funding is the most {{3}} ingredient. Governments, corporations and universities pour trillions of dollars annually into scientific research. Government funding, in particular, often supports the {{4}} research that private companies consider too risky or long-term to pursue alone. Many of today's most important technologies, from the internet to GPS, trace their {{5}} back to publicly funded projects.\n\nTalent is equally {{6}}. Innovation thrives where skilled researchers, engineers and entrepreneurs can exchange ideas freely. Cities and regions that attract diverse talent tend to produce more patents and startup companies. Open collaboration across borders and institutions {{7}} progress further.\n\nThe role of failure is often {{8}}. Most experimental ideas do not work out, but each failure provides lessons that guide future attempts. Cultures that punish failure severely tend to produce fewer breakthroughs, because people become afraid to try anything truly new. Tolerance for setbacks is thus an {{9}} part of innovative ecosystems.\n\nLooking ahead, artificial intelligence, biotechnology and renewable energy are among the fields most likely to {{10}} transformative change. The societies that invest wisely in research, talent and an open culture will be best positioned to benefit from whatever comes next.",
      options: [
        "A) fuel", "B) basic", "C) origins", "D) crucial", "E) overlook",
        "F) accelerates", "G) encourage", "H) produce", "I) underestimated", "J) essential",
        "K) fundamental", "L) generate", "M) sources", "N) creative", "O) diverse"
      ],
      answers: ["A", "G", "D", "K", "C", "B", "F", "I", "J", "L"],
      explanations: {
        1: "fuel 推动，动词，指驱动创新的条件。",
        2: "encourage 鼓励，动词，指鼓励冒险和实验的文化态度。",
        3: "crucial 关键的，形容词，指研发资金是最关键的要素。",
        4: "fundamental research 基础研究，固定搭配。",
        5: "trace origins back to 追溯起源于，固定表达。",
        6: "equally basic 同等基本的，形容词作表语。",
        7: "accelerates progress 加速进步，动词第三人称单数。",
        8: "underestimated 被低估的，被动语态，指失败的作用常被低估。",
        9: "essential part 重要组成部分，形容词。",
        10: "generate transformative change 产生变革性变化，不定式。"
      }
    },
    {
      id: "cl5", title: "选词填空 5：可持续发展与城市规划", cat: "环境",
      text: "Sustainable development has become the guiding principle for urban planners worldwide. The concept, often {{1}} as meeting present needs without compromising future generations, applies to everything from transportation to waste management in growing cities.\n\nPublic transportation is a {{2}} element of sustainable cities. Well-designed bus, subway and tram systems {{3}} reliance on private cars, reducing both carbon emissions and traffic congestion. Cities that invest in cycling infrastructure and pedestrian-friendly streets see additional benefits in public health and quality of life.\n\nGreen building practices have also become {{4}}. Energy-efficient design, renewable energy integration and sustainable materials can dramatically reduce a building's environmental {{5}} over its lifetime. Green roofs, which are covered with plants, help manage rainwater and {{6}} urban heat island effects.\n\nWaste management requires a {{7}} approach. Recycling programs reduce the amount of trash sent to landfills, but a truly circular economy goes further by designing products to be reused, repaired or {{8}} at the end of their life cycle. Zero-waste initiatives encourage citizens to rethink consumption habits.\n\nThe greatest {{9}} may be balancing rapid growth with sustainability. Many developing cities face pressure to house millions of new residents quickly, and environmental concerns can be {{10}} in the rush to build. Yet getting urban planning right from the start is far easier and cheaper than fixing unsustainable development later.",
      options: [
        "A) defined", "B) reduce", "C) key", "D) lower", "E) footprint",
        "F) challenge", "G) recycled", "H) comprehensive", "I) increase", "J) common",
        "K) central", "L) overlooked", "M) effect", "N) produce", "O) impact"
      ],
      answers: ["A", "C", "B", "J", "E", "D", "H", "G", "F", "L"],
      explanations: {
        1: "defined as 被定义为，固定搭配。",
        2: "key element 关键要素，形容词。",
        3: "reduce reliance 减少依赖，动词原形。",
        4: "become common 变得普遍，形容词作表语。",
        5: "environmental footprint 环境足迹，固定搭配。",
        6: "lower effects 降低效应，动词原形，指降低城市热岛效应。",
        7: "comprehensive approach 综合性方法，形容词。",
        8: "recycled 被回收利用，被动语态，与 reused, repaired 并列。",
        9: "greatest challenge 最大挑战，名词。",
        10: "overlooked 被忽视，被动语态，指环境问题在快速建设中可能被忽视。"
      }
    }
  ];

  /* ===== 补充信息匹配 ===== */
  var extMatch = [
    {
      id: "mt3", title: "信息匹配 3：职场与职业发展", cat: "工作",
      paras: [
        "A) The traditional career path—climbing a single corporate ladder over forty years—has largely disappeared. Today's workers can expect to change jobs multiple times, and even careers entirely, over the course of their working lives. Adaptability has become more valuable than loyalty in most industries.",
        "B) Continuous learning is no longer optional. Technology changes so rapidly that skills acquired in university can become outdated within a decade. Professionals who invest time in learning new tools, languages and methodologies maintain their market value, while those who stand still risk falling behind.",
        "C) Soft skills matter more than many people realize. Technical expertise can get you hired, but communication, teamwork and emotional intelligence determine how far you advance. Managers consistently rank interpersonal skills among the most important criteria when promoting employees to leadership positions.",
        "D) Networking remains essential for career growth. Many jobs are never advertised publicly; they are filled through personal connections. Building relationships with colleagues, mentors and industry peers opens doors to opportunities that would otherwise remain invisible. Quality of connections matters more than quantity.",
        "E) Work-life balance has moved from a personal concern to a professional one. Employees who burn out cannot perform well over the long term. Forward-thinking companies now offer flexible hours, remote options and mental health support not out of charity but because they recognize it improves retention and productivity.",
        "F) Career pivots are increasingly common. Someone who started in marketing might move into product management; an engineer might shift to technical sales. Transferable skills—project management, data analysis, client relations—make these moves possible. The key is identifying which of your skills apply to new fields.",
        "G) Mentorship can accelerate development significantly. A good mentor provides guidance, shares industry knowledge and opens doors to opportunities. Young professionals who seek out mentors, whether formally or informally, tend to advance faster than those who try to navigate their careers alone.",
        "H) Side projects and personal branding have become career tools in the digital age. A developer with popular open-source contributions, a designer with a strong online portfolio or a writer with a well-read blog may attract job offers without applying. What you build outside your day job can shape your professional trajectory.",
        "I) Failure and setbacks are inevitable in any career. Projects get canceled, companies downsize, promotions go to someone else. How people respond to these setbacks matters more than the setbacks themselves. Resilience—the ability to bounce back and keep moving forward—separates those who grow from those who stagnate.",
        "J) The future of work will favor those who combine technical skills with creativity and human judgment. As routine tasks become automated, the most valuable workers will be those who can solve complex problems, think strategically and collaborate effectively across diverse teams. Building these capabilities is the best preparation for whatever comes next."
      ],
      statements: [
        { q: "Continuous learning is necessary because technology makes skills outdated quickly.", a: "B", ex: "B 段：技术变化太快，大学学到的技能十年内就可能过时。" },
        { q: "Soft skills like communication and emotional intelligence determine career advancement.", a: "C", ex: "C 段：技术专长让你获得工作，但沟通、团队合作和情商决定你能走多远。" },
        { q: "Many jobs are filled through personal connections rather than public advertisements.", a: "D", ex: "D 段：许多工作从未公开招聘，而是通过人脉关系填补的。" },
        { q: "Work-life balance improves employee retention and productivity.", a: "E", ex: "E 段：有远见的公司提供灵活工作时间和心理健康支持，因为这能提高员工留存率和生产力。" },
        { q: "Transferable skills make career changes between different fields possible.", a: "F", ex: "F 段：可迁移技能如项目管理、数据分析、客户关系使职业转换成为可能。" },
        { q: "Mentors can accelerate career development by providing guidance and opportunities.", a: "G", ex: "G 段：好的导师提供指导、分享行业知识并打开机会之门。" },
        { q: "Side projects and online presence can attract job opportunities actively.", a: "H", ex: "H 段：开源贡献、在线作品集或博客可能吸引工作机会，无需主动申请。" },
        { q: "Resilience in the face of setbacks separates those who grow from those who stagnate.", a: "I", ex: "I 段：从挫折中恢复并继续前进的韧性将成长者与停滞者区分开来。" },
        { q: "The traditional single-career corporate ladder path has largely disappeared.", a: "A", ex: "A 段：在同一公司爬四十年阶梯的传统职业路径已基本消失。" },
        { q: "Future valuable workers will combine technical skills with creativity and human judgment.", a: "J", ex: "J 段：随着日常任务自动化，最有价值的员工将是能解决复杂问题、战略性思考并有效协作的人。" }
      ]
    },
    {
      id: "mt4", title: "信息匹配 4：健康生活方式", cat: "健康",
      paras: [
        "A) Nutrition is the foundation of good health. What we eat directly affects energy levels, immune function and long-term disease risk. A balanced diet rich in vegetables, whole grains, lean proteins and healthy fats provides the body with the nutrients it needs. Diets high in processed foods, sugar and salt, by contrast, contribute to numerous health problems over time.",
        "B) Regular physical activity offers benefits that go far beyond weight control. Exercise strengthens the heart, improves circulation and builds bone density. It also releases endorphins, chemicals that reduce stress and improve mood. Studies consistently show that people who exercise regularly sleep better and report higher overall well-being than those who do not.",
        "C) Sleep is often underestimated but is essential for physical and mental recovery. During sleep, the body repairs tissues, consolidates memories and regulates hormone production. Chronic sleep deprivation increases the risk of obesity, diabetes, heart disease and depression. Yet millions of adults regularly get less than the recommended seven to nine hours per night.",
        "D) Stress management has become a critical health skill in modern life. Short-term stress can be motivating, but chronic stress damages nearly every system in the body. Practices such as meditation, deep breathing, yoga and spending time in nature have all been shown to reduce stress hormone levels and improve resilience.",
        "E) Social connections are surprisingly important for physical health. People with strong social networks tend to live longer, recover faster from illness and have lower rates of mortality than those who are socially isolated. Loneliness, by contrast, has been compared to smoking fifteen cigarettes a day in terms of its effect on lifespan.",
        "F) Hydration is a simple but frequently overlooked health factor. Water is essential for digestion, nutrient absorption, temperature regulation and joint lubrication. Even mild dehydration can cause fatigue, headaches and reduced cognitive function. Yet many people walk around chronically dehydrated, confusing thirst for hunger.",
        "G) Mental health is an integral part of overall well-being, not a separate concern. Conditions like anxiety and depression affect physical health by weakening the immune system and increasing inflammation. Taking care of mental health—whether through therapy, social support or self-care—is just as important as exercise and nutrition.",
        "H) Preventive healthcare saves lives and reduces costs over the long term. Regular check-ups, screenings and vaccinations can detect problems early when they are most treatable. Yet many people only seek medical attention when they are already sick, missing opportunities for prevention and early intervention.",
        "I) Digital habits increasingly affect health outcomes. Excessive screen time, especially before bed, disrupts sleep patterns. Social media use can contribute to anxiety and low self-esteem through social comparison. Setting boundaries around technology use—such as no-phone hours and regular digital detoxes—can significantly improve well-being.",
        "J) Healthy living does not require perfection. Small, consistent changes produce better results than extreme, short-lived diets or exercise programs. Adding one vegetable to each meal, taking a ten-minute walk daily or going to bed thirty minutes earlier can add up to significant health improvements over time."
      ],
      statements: [
        { q: "Exercise releases chemicals that reduce stress and improve mood.", a: "B", ex: "B 段：运动释放内啡肽，这种化学物质能减轻压力、改善情绪。" },
        { q: "Chronic sleep deprivation increases risks of obesity, diabetes and heart disease.", a: "C", ex: "C 段：长期睡眠不足会增加肥胖、糖尿病、心脏病和抑郁症的风险。" },
        { q: "Chronic stress damages nearly every system in the human body.", a: "D", ex: "D 段：长期压力几乎会损害身体的每一个系统。" },
        { q: "Strong social networks are associated with longer life and lower mortality rates.", a: "E", ex: "E 段：拥有强大社交网络的人往往寿命更长、死亡率更低。" },
        { q: "Mild dehydration can cause fatigue, headaches and reduced cognitive function.", a: "F", ex: "F 段：即使轻度脱水也会导致疲劳、头痛和认知功能下降。" },
        { q: "Mental health conditions can weaken the immune system and increase inflammation.", a: "G", ex: "G 段：焦虑和抑郁等心理问题会削弱免疫系统、增加炎症，从而影响身体健康。" },
        { q: "Regular preventive check-ups can detect health problems early when most treatable.", a: "H", ex: "H 段：定期体检和筛查能在问题最容易治疗的早期发现它们。" },
        { q: "Excessive screen time before bed disrupts sleep patterns.", a: "I", ex: "I 段：过多屏幕时间，尤其是睡前，会打乱睡眠模式。" },
        { q: "Small consistent changes work better than extreme short-term health efforts.", a: "J", ex: "J 段：小而持续的改变比极端的短期饮食或运动计划效果更好。" },
        { q: "Diets high in processed foods contribute to numerous health problems over time.", a: "A", ex: "A 段：加工食品、糖和盐含量高的饮食会随着时间推移导致多种健康问题。" }
      ]
    }
  ];

  /* ===== 补充阅读技巧 ===== */
  var extTips = [
    { t: "注意段落首末句", d: "仔细阅读和信息匹配中，段落首句常是主题句，末句常是结论或转折句。先读每段首尾可快速把握全文结构。" },
    { t: "选项排除法提速", d: "遇到不确定的题，先排除明显错误的选项（如绝对化词 only/never/all、与原文相反、偷换主语），再在剩余选项中比对，正确率更高。" },
    { t: "选词填空看上下文逻辑", d: "除了词性，还要关注空格前后的逻辑关系：转折(but/however)、因果(because/therefore)、递进(moreover)、并列(and)，这些是判断词义的线索。" },
    { t: "信息匹配利用专有名词定位", d: "陈述句中的人名、地名、数字、年份、大写机构名是最容易回文定位的标记，先找这些锚点再核对语义，可大幅缩短时间。" }
  ];

  window.CET6_READING.careful = window.CET6_READING.careful.concat(extCareful);
  window.CET6_READING.cloze = window.CET6_READING.cloze.concat(extCloze);
  window.CET6_READING.match = window.CET6_READING.match.concat(extMatch);
  window.CET6_READING.tips = window.CET6_READING.tips.concat(extTips);
})();
