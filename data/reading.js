/* 六级阅读专区素材
 * careful: 仔细阅读（篇章 + 5 题 + 解析）
 * cloze: 选词填空（15 选 10，文中 {{15}} 按题号挖空）
 * match: 信息匹配（段落 + 陈述句配对）
 * tips: 阅读技巧
 */
window.CET6_READING = {
  careful: [
    {
      id: "rc1", title: "仔细阅读 1：远程办公的双面性", cat: "工作",
      text: "When the pandemic forced offices to close in 2020, remote work went from a rare privilege to a global experiment almost overnight. Four years on, the experiment has produced mixed results that continue to divide employers and employees.\n\nFor workers, the benefits are obvious. Without commuting, people gain back hours each week, and many report a better balance between work and family life. Parents can attend school events; caregivers can look after elderly relatives without requesting leave. Surveys also show that a majority of employees believe they are just as productive at home as in the office—if not more so.\n\nEmployers, however, are more skeptical. Some managers worry that remote work weakens teamwork and slows the training of young staff, who learn largely by watching experienced colleagues. A number of major companies have ordered employees back to the office for several days a week, arguing that innovation happens when people share the same room.\n\nThe evidence so far suggests a middle path. Studies of hybrid arrangements—two or three office days per week—find that employees keep most of the flexibility they value while companies preserve opportunities for collaboration. Attrition rates in firms adopting hybrid models dropped significantly compared with those insisting on full-time office work.\n\nYet hybrid work is not a cure-all. It works best for jobs that can be done independently and measured by results. Front-line workers, laboratory researchers and many service employees have no such choice. Moreover, remote work may quietly widen inequality: employees with spacious homes and fast internet benefit far more than those sharing small apartments.\n\nWhat seems certain is that the office of the future will not be the office of 2019. Companies are redesigning offices as places for meeting and collaboration rather than rows of desks, while employees treat commuting days as occasions for teamwork and home days for focused tasks. The nine-to-five routine, it appears, is quietly giving way to something more flexible.",
      words: ["privilege n. 特权", "commute v. 通勤", "skeptical adj. 怀疑的", "attrition n. 人员流失", "hybrid adj. 混合的", "collaboration n. 协作", "inequality n. 不平等", "spacious adj. 宽敞的"],
      questions: [
        { q: "What do surveys show about employees working from home?", opts: ["They miss their colleagues greatly.", "They generally believe their productivity is unaffected or higher.", "They work fewer hours than before.", "They want to return to the office immediately."], a: 1, ex: "第二段末句：多数员工认为在家工作效率不减反增。" },
        { q: "Why do some companies ask employees to return to the office?", opts: ["To reduce electricity costs.", "Because innovation is believed to occur when people meet in person.", "To monitor employees' health.", "Because remote work lowered output sharply."], a: 1, ex: "第三段：一些公司认为创新产生于人们共处一室时。" },
        { q: "What do studies say about hybrid work arrangements?", opts: ["They increase attrition rates.", "They combine flexibility with collaboration opportunities.", "They are unpopular among employees.", "They suit every type of job."], a: 1, ex: "第四段：混合办公兼顾员工灵活性与公司协作，且人员流失率明显下降。" },
        { q: "According to the passage, remote work may widen inequality because ____.", opts: ["some workers lack university degrees", "working conditions at home differ greatly", "companies pay remote workers less", "remote workers commute more"], a: 1, ex: "倒数第二段：住房宽敞、网络快的员工受益更多。" },
        { q: "What can be inferred about offices of the future?", opts: ["They will disappear completely.", "They will be redesigned for collaboration rather than individual desks.", "They will require longer working hours.", "They will be used only by managers."], a: 1, ex: "末段：办公室正被重新设计为会议与协作场所。" }
      ]
    },
    {
      id: "rc2", title: "仔细阅读 2：城市降温之战", cat: "环境",
      text: "As climate change pushes summer temperatures to record highs, cities have become danger zones. Dark roads and concrete buildings absorb heat during the day and release it slowly at night, making urban areas several degrees hotter than the surrounding countryside—a phenomenon known as the urban heat island effect.\n\nThe consequences are deadly. Extreme heat kills more people annually in many countries than hurricanes or floods, and the victims are disproportionately the elderly, the poor and those living in neighborhoods without trees. Research in American cities has found that formerly red-lined districts, historically denied investment, are today among the hottest neighborhoods, often lacking the shade that wealthier areas enjoy.\n\nCities are now fighting back with a simple weapon: trees. A mature tree can cool the air beneath it by several degrees through shade and the evaporation of water from its leaves. Tree-planting programs in cities like Medellín, Colombia, have cut local temperatures measurably, while also reducing air pollution and improving mental health.\n\nOther solutions are just as straightforward. Painting roofs white or covering them with reflective materials bounces sunlight back into space; so-called cool roofs can lower indoor temperatures by several degrees without using a watt of electricity. In India, an inexpensive white paint made from local materials has protected slum dwellings that could not afford air conditioning.\n\nThere are also harder engineering choices. Some cities are burying water pipes under streets to circulate cool water; others are redesigning street canyons to channel sea breezes into dense districts. Such projects are expensive, however, and they compete with budgets for schools, transport and hospitals.\n\nThe fairest approach, researchers argue, is to direct cooling investments first toward the hottest and poorest neighborhoods. Planting trees in a wealthy park may please the eye, but planting them along a sun-baked street where bus riders wait can save lives.",
      words: ["concrete n. 混凝土", "phenomenon n. 现象", "disproportionately adv. 不成比例地", "evaporation n. 蒸发", "reflective adj. 反射的", "circulate v. 循环", "budget n. 预算"],
      questions: [
        { q: "What causes the urban heat island effect according to the passage?", opts: ["Too many parks in cities.", "Roads and buildings absorbing and releasing heat.", "Car emissions at night.", "Warm winds from the countryside."], a: 1, ex: "首段：深色路面与混凝土建筑白天吸热、夜间缓慢放热。" },
        { q: "Who suffer most from extreme heat in cities?", opts: ["Office workers in tall buildings.", "The elderly, the poor and treeless neighborhoods.", "Tourists from cooler regions.", "Workers in air-conditioned factories."], a: 1, ex: "第二段：受害者主要为老人、穷人及无树街区的居民。" },
        { q: "How do trees cool the air beneath them?", opts: ["By absorbing carbon dioxide only.", "Through shade and evaporation from leaves.", "By producing cold air underground.", "By blocking rainfall."], a: 1, ex: "第三段：树荫与叶片蒸腾作用可使树下降温数度。" },
        { q: "What is an advantage of cool roofs mentioned in the passage?", opts: ["They generate electricity.", "They lower indoor temperatures without consuming electricity.", "They are cheaper than paint.", "They heat homes in winter."], a: 1, ex: "第四段：凉屋顶反射阳光，不耗一度电即可降低室温。" },
        { q: "What do researchers suggest about cooling investments?", opts: ["They should go to the hottest, poorest neighborhoods first.", "They should focus on wealthy parks.", "They should wait for cheaper technology.", "They should be spent on hospitals instead."], a: 0, ex: "末段：应优先投向最炎热、最贫困的社区，这能挽救生命。" }
      ]
    },
    {
      id: "rc3", title: "仔细阅读 3：碎片化阅读的隐忧", cat: "教育",
      text: "The average smartphone user checks the device nearly a hundred times a day, often spending less than a minute on each glance. Reading has not escaped this shift. Increasingly, people consume information in tiny pieces: a headline here, a 15-second video there, a paragraph skimmed between messages. Scholars call it fragmented reading, and they are divided over what it is doing to our minds.\n\nOptimists point out that fragmented reading multiplies access to knowledge. A student in a small town can now follow lectures, news and expert discussions that once required a university library. Never before has so much information been available to so many at so little cost.\n\nCritics, however, warn that skimming many small pieces is not the same as understanding a difficult text. Deep reading—following a complex argument across dozens of pages—requires sustained attention, and attention is exactly what fragmented habits erode. In one experiment, participants who browsed social media feeds before reading a long article remembered significantly less of it and were more likely to misread its main points than those who read in silence first.\n\nThere is also the matter of choice. On video platforms, an algorithm decides what appears next, and it is designed to maximize watching time rather than understanding. Readers who follow an algorithm's path may end up consuming hours of content while rarely encountering ideas that challenge their existing views.\n\nMost researchers now agree that the two modes serve different purposes and can coexist. Fragmented reading works well for news, practical tips and staying connected. But the skills that colleges and employers value—analyzing evidence, weighing arguments, writing coherently—still depend on the ability to read deeply and at length.\n\nThe practical advice is simple: keep the quick bites, but schedule protected time for long texts as well. Treat a book or a long article the way you would treat a gym session—an appointment not to be interrupted. Reading widely in small pieces and reading deeply at length are not rivals; they are different muscles, and the modern mind needs both.",
      words: ["fragmented adj. 碎片化的", "skim v. 略读", "erode v. 侵蚀", "sustained adj. 持续的", "algorithm n. 算法", "coherently adv. 连贯地"],
      questions: [
        { q: "What do optimists think about fragmented reading?", opts: ["It destroys deep reading habits.", "It greatly expands access to knowledge.", "It reduces the quality of education.", "It should be banned on campuses."], a: 1, ex: "第二段：碎片化阅读让知识获取的成本空前降低。" },
        { q: "What did the experiment in the passage find?", opts: ["Silent readers read faster.", "Social-media browsing before reading weakened comprehension.", "Long articles are always misunderstood.", "Participants preferred videos to text."], a: 1, ex: "第三段实验：先刷社交媒体再读长文者记忆更少且更易误读要点。" },
        { q: "What is the problem with algorithm-driven content according to the passage?", opts: ["It is too expensive for most users.", "It aims at viewing time rather than understanding.", "It removes all entertainment value.", "It only shows academic articles."], a: 1, ex: "第四段：算法以最大化观看时长为目标。" },
        { q: "According to most researchers, deep reading is still necessary because ____.", opts: ["it is the only way to get news", "colleges and employers value analytical abilities built by it", "fragmented reading is harmful in every case", "books will replace videos soon"], a: 1, ex: "第五段：分析与论证等能力仍依赖深度长文阅读。" },
        { q: "What advice does the author give at the end?", opts: ["Give up fragmented reading entirely.", "Read only books in libraries.", "Keep quick reading but also schedule protected time for long texts.", "Use algorithms to choose all reading materials."], a: 2, ex: "末段建议：保留碎片化阅读，同时为长文安排不受打扰的固定时间。" }
      ]
    },
    {
      id: "rc4", title: "仔细阅读 4：社交媒体与青少年心理", cat: "社会",
      text: "Few questions in public health have sparked as much recent debate as the impact of social media on teenagers' mental health. While platforms themselves insist their products are safe, a growing body of research paints a more troubling picture.\n\nThe sharpest findings concern adolescent girls. Studies tracking thousands of teenagers have found that those who spend three or more hours a day on social media face significantly higher rates of depression and anxiety. The problem appears to be most acute between ages twelve and fifteen, when social comparison is at its peak and self-esteem is most fragile.\n\nResearchers point to several mechanisms. First, social media promotes upward social comparison—teenagers see carefully edited versions of their peers' lives and feel their own fall short. Second, late-night scrolling displaces sleep, and sleep loss itself is a major risk factor for depression. Third, the design of these platforms, with their infinite scrolls and variable rewards, resembles slot machines in their psychological effect.\n\nNot all effects are negative. For some teenagers, particularly those from minority groups or isolated areas, online communities provide belonging and support they cannot find locally. The key seems to be the difference between active use—messaging friends, sharing creative work—and passive use, which means mindlessly scrolling through strangers' content.\n\nSeveral countries have responded with legislation. Some require platforms to verify users' ages and ban accounts for children under thirteen. Others have passed laws forcing platforms to design their products with minor protection in mind, removing features like infinite scroll and autoplay for underage users.\n\nMost researchers stop short of saying social media causes mental illness outright. The relationship is likely bidirectional: unhappy teenagers may spend more time online, and that time may in turn deepen their unhappiness. What is clear, however, is that parents, schools, and policymakers can no longer treat heavy social media use as harmless.",
      words: ["spark v. 引发", "adolescent adj. 青春期的", "upward social comparison 向上社会比较", "displace v. 取代，排挤", "variable rewards 变率奖励", "bidirectional adj. 双向的"],
      questions: [
        { q: "What group is most affected by social media according to the passage?", opts: ["Adult men", "Adolescent girls aged 12-15", "College students", "Senior citizens"], a: 1, ex: "第二段：影响在12-15岁女孩中最为显著。" },
        { q: "Which is NOT mentioned as a mechanism for social media harm?", opts: ["Social comparison", "Sleep loss from late-night scrolling", "Slot-machine-like design", "Online shopping addiction"], a: 3, ex: "第三段提到三个机制，网购成瘾未提及。" },
        { q: "What is the key difference in how social media is used?", opts: ["Mobile vs. computer use", "Active use vs. passive use", "Morning vs. evening use", "Free vs. paid accounts"], a: 1, ex: "第四段：主动使用有益，被动刷屏有害。" },
        { q: "What have some countries done to protect minors?", opts: ["Banned all social media", "Required age verification and removed harmful features", "Raised the legal driving age", "Prohibited internet for teens"], a: 1, ex: "第五段：一些国家要求年龄验证并为未成年人移除无限滚动等功能。" },
        { q: "How does the passage describe the relationship between social media and mental illness?", opts: ["Social media directly causes all mental illness", "The relationship is likely bidirectional", "There is no relationship", "Only boys are affected"], a: 1, ex: "末段：关系是双向的——不开心的人花更多时间上网，上网又加深不开心。" }
      ]
    }
  ],
  cloze: [
    {
      id: "cl1", title: "选词填空 1：电子垃圾的挑战", cat: "环境",
      text: "Every year the world produces more than 50 million tons of electronic waste—old phones, broken laptops and {{1}} appliances. Yet less than a fifth of this waste is formally {{2}} and recycled. The rest is buried, burned or shipped to developing countries, where workers—including children—take the devices apart by hand to {{3}} valuable metals such as gold and copper.\n\nThe methods used are often dangerous. Burning cables to {{4}} copper releases toxic fumes, and acid baths used to extract gold pollute rivers and soil. Studies of e-waste sites have found high levels of lead and mercury in the blood of local residents, {{5}} children and pregnant women.\n\nThe situation is {{6}} by the shortening life cycle of electronic products. Many phones are designed to be replaced rather than repaired; batteries are {{7}} inside sealed cases, and software updates gradually slow older models. Consumers, meanwhile, are {{8}} to upgrade by aggressive marketing.\n\nSolutions are emerging. Some countries now require manufacturers to take back and recycle their products, a policy known as extended producer responsibility. Repair cafés and right-to-repair laws {{9}} consumers to fix devices instead of discarding them. And a new generation of designers is creating modular phones whose parts can be {{10}} replaced, extending the devices' lives.",
      options: [
        "A) gradually", "B) discarded", "C) recovered", "D) removed", "E) exposed",
        "F) household", "G) collected", "H) especially", "I) separated", "J) motivate",
        "K) worsened", "L) encourage", "M) individually", "N) tempted", "O) release"
      ],
      answers: ["F", "G", "C", "O", "H", "K", "D", "N", "L", "M"],
      explanations: {
        1: "household appliances 家用电器，形容词修饰名词。",
        2: "collected 被收集回收，与 recycled 并列，被动语态。",
        3: "recovered 回收/提取贵重金属，动词。",
        4: "release copper 释放出铜（燃烧电缆以取出铜）。",
        5: "especially 尤其，副词强调儿童与孕妇。",
        6: "is worsened 被…加剧，被动语态。",
        7: "removed from sealed cases 从密封外壳中取出/被移除。",
        8: "are tempted to upgrade 被诱使升级。",
        9: "encourage sb to do 固定搭配，鼓励消费者维修。",
        10: "individually replaced 可单独更换（模块化手机部件）。"
      }
    }
  ],
  match: [
    {
      id: "mt1", title: "信息匹配 1：睡眠的科学", cat: "健康",
      paras: [
        "A) Ask anyone how to be healthier and you will hear the usual advice: eat well and exercise. Yet the third pillar of health—sleep—receives far less attention, even though the average person will spend about a third of life doing it.",
        "B) During sleep, the brain does not simply switch off. In deep sleep it transfers the day's memories from temporary storage into long-term storage, which is why students who sleep well after studying remember more than those who stay up.",
        "C) Sleep also cleans house. Brain cells shrink slightly during deep sleep, allowing fluid to wash away waste proteins that accumulate during waking hours. Some of these proteins are linked to Alzheimer's disease, and long-term sleep shortage may raise the risk of dementia.",
        "D) The body's immune system depends on sleep as well. Experiments show that people who sleep less than six hours a night are several times more likely to catch a cold than those who sleep more than seven hours.",
        "E) How much sleep is enough? Most adults need seven to nine hours, and the need is largely written in our genes. A tiny number of people carry a rare genetic variant that allows them to thrive on five hours, but they are the exception rather than the rule.",
        "F) Timing matters as much as duration. The body's internal clock, tuned by morning light, decides when we feel alert or sleepy. Irregular schedules—late nights followed by early alarms—force the clock to reset constantly, a burden scientists compare to weekly jet lag.",
        "G) Modern life conspires against sleep in many ways. Evening light from screens delays the release of melatonin, the hormone that makes us sleepy, while caffeine consumed even six hours before bed measurably reduces sleep quality.",
        "H) Stress is another thief of sleep. Anxious thoughts keep the brain in a state of alertness, and the resulting poor sleep increases stress hormones the next day, creating a vicious cycle that is hard to escape.",
        "I) The good news is that sleep responds well to simple habits. Keeping a fixed wake-up time, getting morning sunlight, and putting screens away an hour before bed can improve sleep quality within weeks, without any medication.",
        "J) Employers and schools are beginning to take notice. Some companies now discourage after-hours messages, and a growing number of school districts have pushed start times later so that teenagers, whose body clocks run late, can get the sleep their developing brains require."
      ],
      statements: [
        { q: "Deep sleep helps the brain clear out waste proteins connected with a brain disease.", a: "C", ex: "C 段提到脑细胞在深睡中缩小，让液体冲走与阿尔茨海默病相关的废物蛋白。" },
        { q: "Genes largely determine how much sleep an individual needs.", a: "E", ex: "E 段指出睡眠需求主要由基因决定，只需 5 小时的人是极少数例外。" },
        { q: "Irregular sleep schedules put a burden on the body clock similar to jet lag.", a: "F", ex: "F 段将作息紊乱比作每周倒时差。" },
        { q: "Screen light delays the release of the hormone that causes sleepiness.", a: "G", ex: "G 段：屏幕光线推迟褪黑素分泌。" },
        { q: "People who sleep less are more likely to catch infections.", a: "D", ex: "D 段实验：睡眠少于 6 小时者感冒概率更高。" },
        { q: "Simple habits can improve sleep without medicine.", a: "I", ex: "I 段：固定起床时间、晨光、睡前收起屏幕等习惯数周内即可改善睡眠。" },
        { q: "Some schools have delayed their start times for teenagers' biological rhythm.", a: "J", ex: "J 段：越来越多学区推迟上课时间以适应青少年生理节律。" },
        { q: "Anxiety and poor sleep reinforce each other in a cycle.", a: "H", ex: "H 段：焦虑致失眠、失眠又升高应激激素，形成恶性循环。" },
        { q: "Sleep is where the brain consolidates new memories for the long term.", a: "B", ex: "B 段：深睡将当日记忆转入长期存储。" },
        { q: "Sleep receives less public attention than diet and exercise.", a: "A", ex: "A 段：作为健康第三支柱的睡眠远不如饮食与运动受关注。" }
      ]
    }
  ],
  tips: [
    { t: "先读题干再读文章", d: "带着题干关键词（人名、数字、专有名词）定位原文，比通读全文再做题快得多，仔细阅读尤其有效。" },
    { t: "信息匹配抓关键词", d: "划出陈述句中的独特词（数字、大写、合成词），再回段落找同义改写；注意 one in five 之类的同义替换常是考点。" },
    { t: "选词填空先标词性", d: "先给 15 个选项标注 n./v./adj./adv.，再根据空格前后判断所需词性，能排除一半选项。" },
    { t: "警惕偷换概念", d: "选项若出现原文词汇却改变了对象、时间或程度（always 变 often），往往是干扰项；正确答案通常是原文的同义改写。" },
    { t: "控制时间节奏", d: "建议节奏：选词填空 10 分钟、信息匹配 15 分钟、仔细阅读每篇 9 分钟，留 6 分钟涂卡与检查。" },
    { t: "长难句先抓主干", d: "遇到长句先找主谓宾，把从句和插入语暂时括起来，语义自然清晰，这对翻译和写作同样有用。" }
  ]
};
