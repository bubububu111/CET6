/* 六级阅读扩展素材包 —— 补充仔细阅读 + 选词填空 + 信息匹配
 * 来源：六级真题改编、模拟练习
 */
(function () {
  if (!window.CET6_READING) return;

  /* ===== 补充仔细阅读 ===== */
  var extCareful = [
    {
      id: "rc5", title: "仔细阅读 5：人工智能与就业前景", cat: "科技",
      text: "Artificial intelligence has moved from science fiction into everyday life with astonishing speed. Tools that can write essays, generate images and even write computer code are now accessible to anyone with an internet connection. Yet behind the excitement lies a question that affects hundreds of millions of workers: will AI take my job?\n\nThe answer, according to most economists, is not a simple yes or no. History offers a pattern: every major technology initially displaces some jobs while eventually creating new ones that could not have been imagined before. The invention of the automobile put carriage makers out of work but employed far more people in manufacturing, road construction and tourism.\n\nAI may follow a similar path, but with an important difference in speed. Previous technologies spread over decades, giving workers time to retrain. AI tools can be adopted in weeks, and they are improving just as fast. A study by a leading research institute estimated that up to 30 percent of current work activities could be automated by 2030, with the biggest impact on office work, customer service and data processing.\n\nThe jobs most at risk share a common feature: they involve routine, repeatable tasks that follow clear rules. Data entry clerks, basic translators and junior accountants all fall in this category. By contrast, roles requiring creativity, emotional intelligence or physical adaptability remain difficult to automate. Nurses, teachers, electricians and strategic planners are likely to see little direct replacement.\n\nInterestingly, AI may widen inequality not only between occupations but within them. A senior lawyer who uses AI to draft contracts can handle more cases and charge higher fees; a junior lawyer who used to draft those contracts may find fewer entry-level positions. The technology thus rewards those who can direct it while squeezing those who perform the tasks it takes over.\n\nThe practical implication for individuals is clear: lifelong learning is no longer a slogan but a survival skill. Workers who combine domain expertise with the ability to use AI tools will likely thrive. Those who refuse to adapt may find that the market has moved on without them.",
      words: ["astonishing adj. 惊人的", "displace v. 取代", "automate v. 自动化", "routine adj. 日常的", "adaptability n. 适应能力", "implication n. 含义，影响"],
      questions: [
        { q: "What does the pattern from history suggest about new technologies?", opts: ["They always destroy more jobs than they create.", "They initially displace some jobs but eventually create new ones.", "They have no effect on employment.", "They only benefit wealthy people."], a: 1, ex: "第二段：历史表明，新技术最初会取代一些工作，但最终会创造无法想象的新工作。" },
        { q: "How is AI different from previous technologies in terms of speed?", opts: ["AI spreads more slowly.", "AI tools can be adopted in weeks and improve rapidly.", "AI takes decades to spread.", "AI is never adopted.", "AI is slower than automobiles."], a: 1, ex: "第三段：AI 可以在几周内被采用，且改进速度同样快。" },
        { q: "Which type of jobs are most at risk of being automated?", opts: ["Jobs requiring creativity", "Jobs involving routine, repeatable tasks", "Jobs requiring emotional intelligence", "Jobs involving physical adaptability"], a: 1, ex: "第四段：涉及日常可重复任务的工作风险最大。" },
        { q: "How might AI widen inequality within the same profession?", opts: ["It will reduce all salaries equally.", "Senior workers benefit while junior workers lose opportunities.", "It will only help junior workers.", "It will eliminate all legal jobs."], a: 1, ex: "第五段：资深律师用 AI 处理更多案件收费更高，初级律师的入门岗位减少。" },
        { q: "What is the practical advice for individuals according to the passage?", opts: ["Avoid using AI tools.", "Combine domain expertise with AI tool skills through lifelong learning.", "Wait for the government to act.", "Change to a completely different career."], a: 1, ex: "末段：终身学习不再只是口号而是生存技能。" }
      ]
    },
    {
      id: "rc6", title: "仔细阅读 6：粮食安全与可持续农业", cat: "环境",
      text: "By 2050, the world will need to feed nearly ten billion people, roughly two billion more than today. Yet the agricultural systems that fed the twentieth century are showing signs of strain. Soils are degrading, aquifers are shrinking, and climate change is shifting growing seasons in ways that farmers struggle to predict.\n\nThe Green Revolution of the 1960s and 70s staved off predicted famines by introducing high-yield crop varieties, chemical fertilizers and irrigation. Food production rose dramatically. But the gains came at a cost: heavy fertilizer use polluted rivers and coastal waters, pesticide overuse harmed pollinators, and the monoculture practice depleted soil nutrients.\n\nA new consensus is emerging among agricultural scientists. They argue that the next doubling of food output cannot come from simply intensifying the old methods. Instead, the focus must shift to what they call sustainable intensification—producing more food per unit of land while restoring, rather than depleting, natural resources.\n\nSeveral approaches show promise. Precision agriculture uses sensors, drones and data analysis to apply water and fertilizer only where needed, cutting waste by 20 to 40 percent. Agroforestry, which integrates trees with crops, improves soil quality and provides shade for livestock in hot climates. On the consumer side, reducing food waste—currently about a third of all food produced—is the simplest way to ease demand.\n\nDietary shifts also matter. Raising animals for meat requires far more land and water than growing crops directly for human consumption. As incomes rise in developing countries, meat consumption grows, increasing pressure on land and water resources. A diet with more plant-based meals does not require everyone to become vegetarian; even replacing some meat with alternatives can free up significant resources.\n\nThe challenge is not merely technical. Farmers need financial incentives to adopt sustainable practices, consumers need affordable options, and governments need policies that balance short-term yields with long-term stability. The future of food security will depend less on a single miracle technology than on the combined effort of many small changes across the entire food system.",
      words: ["degrading adj. 退化的", "aquifer n. 蓄水层", "famine n. 饥荒", "monoculture n. 单一栽培", "intensification n. 集约化", "agroforestry n. 农林复合", "pollinator n. 授粉者"],
      questions: [
        { q: "What is the main problem with the agricultural methods of the Green Revolution?", opts: ["They produced too little food.", "They caused pollution and depleted soil nutrients.", "They were too expensive for farmers.", "They only worked in Africa."], a: 1, ex: "第二段：化肥污染河流，农药伤害授粉者，单一栽培耗尽土壤养分。" },
        { q: "What is sustainable intensification according to the passage?", opts: ["Producing less food to protect soil", "Producing more food per unit of land while restoring natural resources", "Abandoning modern technology", "Growing only one type of crop"], a: 1, ex: "第三段：可持续集约化是在恢复自然资源的同时提高单位产量。" },
        { q: "How much food is currently wasted according to the passage?", opts: ["About 10 percent", "About a third", "About half", "About 5 percent"], a: 1, ex: "第四段：目前约三分之一的粮食被浪费。" },
        { q: "Why does meat consumption increase pressure on resources?", opts: ["Meat is unhealthy.", "Raising animals requires more land and water than growing crops.", "Meat production creates too many jobs.", "Animals produce too much food."], a: 1, ex: "第五段：养殖动物比直接种植作物需要更多土地和水资源。" },
        { q: "What does the author conclude about food security?", opts: ["It depends on a single miracle technology.", "It requires combined efforts of many small changes across the food system.", "It is impossible to achieve.", "It only depends on government policies."], a: 1, ex: "末段：粮食安全不太可能依赖单一技术突破，而是靠整个食品系统的众多小变革。" }
      ]
    },
    {
      id: "rc7", title: "仔细阅读 7：远程教育的得与失", cat: "教育",
      text: "When schools closed in 2020, more than a billion students shifted to online learning almost overnight. Three years later, the experiment has produced enough evidence to judge what worked and what did not.\n\nThe successes are real. Universities that once limited online courses to a few hundred students suddenly enrolled tens of thousands. Professionals in remote areas gained access to lectures from top institutions. Students with disabilities found that recorded videos and adjustable captions made learning more accessible than physical classrooms ever had.\n\nYet the failures were equally clear. Younger children, especially those under ten, struggled to focus on screens for long periods. The social functions of school—making friends, resolving conflicts, learning to share—were difficult to replicate online. Teachers reported that participation dropped when students could hide behind a screen, and that assessing understanding was far harder without seeing faces and body language.\n\nThe digital divide was the harshest failure of all. In wealthy suburbs, students had fast internet, quiet study spaces and parents who could help. In low-income neighborhoods, children shared a single phone with siblings, sat in noisy apartments, and often had no adult guidance during school hours. Research found that students from disadvantaged backgrounds lost months of learning during the period, while students from wealthier families made small gains—a widening gap that may affect lifetime earnings.\n\nThe most lasting change may be neither the successes nor the failures but the combination. Universities are keeping online options for lectures while reserving classrooms for discussion and labs. Employers are using online modules for compliance training. And younger students are getting a mix of screen time and hands-on activities that previous generations never experienced.\n\nThe lesson is not that online learning is good or bad, but that context matters. A recorded lecture is a poor substitute for a kindergarten circle, but a fine way to teach a professional a new software tool. The future of education will be less about choosing between online and in-person and more about matching the method to the moment.",
      words: ["enroll v. 注册", "replicate v. 复制", "caption n. 字幕", "digital divide 数字鸿沟", "sibling n. 兄弟姐妹", "compliance n. 合规", "module n. 模块"],
      questions: [
        { q: "What was a positive outcome of online learning for students with disabilities?", opts: ["They got lower grades.", "Recorded videos and adjustable captions made learning more accessible.", "They could not participate at all.", "They needed more help than before."], a: 1, ex: "第二段：残障学生发现录播视频和可调字幕比实体课堂更方便。" },
        { q: "Why was online learning difficult for younger children?", opts: ["They were too smart for the material.", "They struggled to focus on screens and missed social functions of school.", "They preferred online learning.", "They did not have any devices."], a: 1, ex: "第三段：低龄儿童难以长时间专注屏幕，社交功能也难以线上复制。" },
        { q: "What caused the widening learning gap during the pandemic?", opts: ["Some students studied harder than others.", "Students from wealthy families had better resources while disadvantaged students lacked support.", "Teachers gave different lessons to different students.", "Online learning was equally bad for everyone."], a: 1, ex: "第四段：富裕家庭学生有网速安静空间和家长辅导，低收入社区学生则分享手机、环境嘈杂。" },
        { q: "What is the most lasting change in education according to the passage?", opts: ["All classes will be online permanently.", "A combination of online and in-person learning matched to the situation.", "All classes will return to physical classrooms.", "Online learning will be banned."], a: 1, ex: "第五段和末段：最持久的变化是线上与线下的结合。" },
        { q: "What lesson does the author draw about online learning?", opts: ["It is always good.", "It is always bad.", "Context matters—match the method to the moment.", "It should replace all traditional education."], a: 2, ex: "末段：教训不在于线上好或坏，而在于情境至关重要。" }
      ]
    },
    {
      id: "rc8", title: "仔细阅读 8：城市化与水资源危机", cat: "环境",
      text: "Cities have always been built near water. From ancient Rome to modern New York, access to rivers, lakes or the sea has determined where human settlements grow. But as urban populations swell and climate change disrupts rainfall patterns, the relationship between cities and water is becoming increasingly tense.\n\nToday, roughly half of the world's largest cities face water stress—meaning demand exceeds supply for at least one month per year. Cape Town came dangerously close to running out of water entirely in 2018, an event it labeled Day Zero. Chennai, India's sixth-largest city, reached its own Day Zero in 2019. These near-misses have become warnings for other cities.\n\nThe problem has three layers. First, population growth increases demand. A city of ten million uses far more water than one of five million, and the world's urban population grows by roughly 80 million each year. Second, aging infrastructure leaks. In some older cities, up to 40 percent of treated water is lost through broken pipes before it reaches any tap. Third, climate change makes supply less predictable. Cities that once relied on steady rainfall now face longer dry seasons and more intense storms that dump water faster than reservoirs can capture it.\n\nSolutions exist but require investment and political will. Fixing leaks is the cheapest option; replacing old pipes can cut losses significantly. Desalination plants, which remove salt from seawater, provide a stable supply for coastal cities but are energy-intensive and expensive. Water recycling—treating wastewater for non-drinking uses like irrigation and industry—costs less and is gaining acceptance.\n\nOn the demand side, pricing water appropriately can discourage waste. Many cities charge flat rates that give consumers no reason to conserve. When cities install meters and charge by volume, consumption typically drops by 15 to 30 percent. Public education campaigns, such as fixing leaky taps and choosing drought-tolerant plants for gardens, also contribute.\n\nThe hardest changes are political. Subsidies that keep water artificially cheap for agriculture or industry often leave cities without enough. Reforming water pricing is risky for politicians, since voters rarely welcome higher bills. Yet without fair pricing and honest accounting of supply, the next Day Zero may not be a near-miss.",
      words: ["swell v. 膨胀", "infrastructure n. 基础设施", "desalination n. 海水淡化", "recycling n. 回收利用", "subsidy n. 补贴", "drought-tolerant adj. 耐旱的"],
      questions: [
        { q: "What happened in Cape Town in 2018?", opts: ["The city built a new reservoir.", "The city nearly ran out of water entirely.", "The city's population doubled.", "The city flooded."], a: 1, ex: "第二段：开普敦在 2018 年濒临断水，称为 Day Zero。" },
        { q: "Which is NOT mentioned as a cause of urban water stress?", opts: ["Population growth", "Aging infrastructure leaks", "Climate change affecting rainfall", "Too many water recycling plants"], a: 3, ex: "第三段提到三层原因：人口增长、管道老化和气候变化。" },
        { q: "What is the cheapest solution mentioned in the passage?", opts: ["Building desalination plants", "Fixing leaks by replacing old pipes", "Water recycling", "Building new reservoirs"], a: 1, ex: "第四段：修复管道是最便宜的方案。" },
        { q: "How much does water consumption drop when cities install meters?", opts: ["5 to 10 percent", "15 to 30 percent", "50 to 60 percent", "Not at all"], a: 1, ex: "第五段：安装水表按量收费后消费量下降 15%-30%。" },
        { q: "Why is water pricing reform politically difficult?", opts: ["It is unnecessary.", "Voters rarely welcome higher bills.", "It has no effect on conservation.", "It is unconstitutional."], a: 1, ex: "末段：保持水价人为低廉的补贴使城市缺水，但改革水价对政治家有风险。" }
      ]
    }
  ];

  /* ===== 补充选词填空 ===== */
  var extCloze = [
    {
      id: "cl2", title: "选词填空 2：微塑料的威胁", cat: "环境",
      text: "Microplastics—tiny plastic fragments smaller than five millimeters—have been {{1}} in every corner of the planet, from the deepest ocean trenches to mountain-top snow. Once {{2}} as a curiosity, they are now {{3}} as one of the most widespread pollutants on Earth.\n\nThe sources are {{4}}. Larger plastic items, such as bottles and bags, break down over years of sun and wave action into ever-smaller {{4}}. Synthetic clothing {{5}} microfibers with every wash. Car tires, made partly of synthetic rubber, {{6}} tiny particles onto roads, which rain then washes into rivers.\n\nThe health effects on humans are still being studied, but early findings are {{7}}. Microplastics have been found in human blood, lung tissue and breast milk. Laboratory studies {{8}} that the smallest particles can cross cell membranes and {{9}} inflammation. While the long-term effects remain uncertain, the precautionary principle suggests reducing plastic {{10}} before the science is complete.",
      options: [
        "A) concerning", "B) particles", "C) release", "D) shedding", "E) various",
        "F) detected", "G) regarded", "H) considered", "I) surprisingly", "J) generate",
        "K) emerging", "L) fragments", "M) trigger", "N) multiple", "O) consumption"
      ],
      answers: ["F", "G", "H", "N", "D", "C", "A", "K", "M", "O"],
      explanations: {
        1: "detected 被发现，被动语态。",
        2: "regarded as 被视为，固定搭配。",
        3: "considered as 被认为是，与上句形成转折。",
        4: "multiple sources 多种来源。",
        5: "shedding 微纤维，现在分词作定语。",
        6: "release 释放，动词。",
        7: "concerning 令人担忧的，形容词。",
        8: "emerging studies 新出现的研究。",
        9: "trigger inflammation 引发炎症。",
        10: "plastic consumption 塑料消费/使用。"
      }
    }
  ];

  /* ===== 补充信息匹配 ===== */
  var extMatch = [
    {
      id: "mt2", title: "信息匹配 2：远程办公的演变", cat: "工作",
      paras: [
        "A) Remote work is not new. Telecommuting experiments began in the 1970s, when oil crises made commuting expensive. Companies like IBM installed terminals in employees' homes, but the technology limited the practice to data-entry and customer-service roles.",
        "B) The internet changed everything. By the early 2000s, broadband connections and laptops made it possible for knowledge workers to do most tasks from home. Still, most companies insisted on office attendance, treating remote work as a occasional privilege.",
        "C) The pandemic forced a global test. Within weeks, hundreds of millions of workers moved to home offices. Productivity did not collapse as many managers had feared; in several studies, it actually rose, as workers reallocated commuting time to tasks.",
        "D) The benefits extended beyond output. Employees reported better sleep, more exercise and improved family relationships. Parents attended school events they had always missed. People with disabilities, long excluded from many offices, found remote arrangements liberating.",
        "E) Yet the drawbacks were real. New employees struggled to learn company culture through a screen. Junior staff lost the casual mentoring that happens when experienced colleagues sit nearby. Team-building became harder when every interaction had to be scheduled.",
        "F) The hybrid model emerged as a compromise. Most employees now spend two or three days in the office, reserving home days for focused work and office days for collaboration. Companies that adopted hybrid arrangements report lower attrition and higher satisfaction.",
        "G) Commercial real estate faces a long adjustment. Office vacancy rates in major cities have risen significantly. Some buildings are being converted to apartments, while others are redesigned as collaborative spaces with fewer desks and more meeting rooms.",
        "H) The geographic spread of work is widening. Employees who no longer commute daily can live farther from city centers, and some have moved to entirely different regions. This migration affects local housing markets, tax bases and transportation patterns.",
        "I) The future of remote work will be shaped less by technology than by management philosophy. Some executives insist that innovation requires physical presence; others see distributed teams as a competitive advantage in hiring. Both views have evidence, and the debate continues.",
        "J) What seems certain is that the office of 2026 is not the office of 2019. Employees treat the office as a place for meetings and social connection, and home as a place for deep work. This separation may prove to be the most durable legacy of the pandemic."
      ],
      statements: [
        { q: "Productivity did not collapse during the pandemic shift to remote work.", a: "C", ex: "C 段：生产力并没有像管理者担心的那样崩溃，实际上反而上升。" },
        { q: "Employees with disabilities found remote arrangements beneficial.", a: "D", ex: "D 段：残障员工发现远程安排是解放性的。" },
        { q: "New employees struggled to learn company culture through screens.", a: "E", ex: "E 段：新员工难以通过屏幕学习公司文化。" },
        { q: "Companies with hybrid models report lower staff turnover.", a: "F", ex: "F 段：采用混合模式的公司报告了更低的员工流失率。" },
        { q: "Office buildings are being converted to apartments due to high vacancy rates.", a: "G", ex: "G 段：一些写字楼被改造为公寓，空置率显著上升。" },
        { q: "Remote work enables employees to live farther from city centers.", a: "H", ex: "H 段：不用每天通勤的员工可以住得离市中心更远。" },
        { q: "Telecommuting experiments started in the 1970s due to oil crises.", a: "A", ex: "A 段：远程办公实验始于 1970 年代石油危机。" },
        { q: "The debate about remote work is shaped by management philosophy, not technology.", a: "I", ex: "I 段：远程办公的未来更多由管理理念而非技术决定。" },
        { q: "Employees now treat office as a place for meetings and social connection.", a: "J", ex: "J 段：员工将办公室视为会议和社交场所。" },
        { q: "Broadband connections made remote work possible for knowledge workers.", a: "B", ex: "B 段：宽带和笔记本电脑使知识工作者远程工作成为可能。" }
      ]
    }
  ];

  window.CET6_READING.careful = window.CET6_READING.careful.concat(extCareful);
  window.CET6_READING.cloze = window.CET6_READING.cloze.concat(extCloze);
  window.CET6_READING.match = window.CET6_READING.match.concat(extMatch);
})();
