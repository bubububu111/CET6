/* 听力素材：文本 + 题目（由浏览器语音合成朗读，无需音频文件）
 * conversations: 短对话 / longconvs: 长对话 / passages: 短文理解
 * dictation: 听写填空，文本中 {{word}} 表示挖空
 */
window.CET6_LISTENING = {
  shortConvs: [
    {
      id: "sc1", title: "短对话 1：图书馆借书",
      lines: [
        { s: "W", t: "I've been waiting for this book on reserve for almost three weeks. Could you check if it's been returned?" },
        { s: "M", t: "Let me see. It was due back yesterday, but there's no record of its return. I can fine the borrower and contact you as soon as it comes in." },
        { s: "W", t: "That would be great. I really need it for my term paper due next Friday." }
      ],
      questions: [
        { q: "Where does the conversation most probably take place?", opts: ["In a bookstore.", "In a library.", "In a classroom.", "In a post office."], a: 1 },
        { q: "Why does the woman need the book?", opts: ["To prepare for an exam.", "To write her term paper.", "To teach a class.", "To return it to the borrower."], a: 1 }
      ]
    },
    {
      id: "sc2", title: "短对话 2：工作面试",
      lines: [
        { s: "M", t: "I heard the company is going to downsize next month. Do you think our jobs are at risk?" },
        { s: "W", t: "Don't worry too much. The manager said only the departments that are less profitable will be affected, and ours is doing quite well." }
      ],
      questions: [
        { q: "What are the speakers mainly talking about?", opts: ["A job interview.", "Possible layoffs.", "A new department.", "The company's profits."], a: 1 },
        { q: "How does the woman feel about their department?", opts: ["Worried.", "Indifferent.", "Confident.", "Disappointed."], a: 2 }
      ]
    },
    {
      id: "sc3", title: "短对话 3：选课建议",
      lines: [
        { s: "W", t: "I'm thinking of taking Professor Smith's economics course next semester, but I've heard it's really demanding." },
        { s: "M", t: "It is, but it's definitely worth it. Just make sure you keep up with the reading assignments from day one." }
      ],
      questions: [
        { q: "What does the man think of the course?", opts: ["It is too difficult to finish.", "It is challenging but worthwhile.", "It requires no reading.", "It is boring and useless."], a: 1 },
        { q: "What does the man advise the woman to do?", opts: ["Drop the course.", "Take another professor's course.", "Keep up with the reading.", "Study only before exams."], a: 2 }
      ]
    },
    {
      id: "sc4", title: "短对话 4：周末计划",
      lines: [
        { s: "M", t: "Are you doing anything this weekend? A few of us are planning to volunteer at the city marathon." },
        { s: "W", t: "I'd love to, but I promised to help my sister move into her new apartment. Maybe I can join you next time." }
      ],
      questions: [
        { q: "What will the woman do this weekend?", opts: ["Run in a marathon.", "Volunteer at a race.", "Help her sister move.", "Visit a new apartment."], a: 2 },
        { q: "What can we infer about the woman?", opts: ["She dislikes sports.", "She is willing to volunteer some other time.", "She has already signed up.", "She will watch the marathon."], a: 1 }
      ]
    }
  ],
  longConvs: [
    {
      id: "lc1", title: "长对话 1：讨论在线学习",
      lines: [
        { s: "M", t: "Sarah, how do you like the new online learning platform the university adopted this semester?" },
        { s: "W", t: "Overall, I find it quite convenient. I can watch recorded lectures anytime and review difficult parts as many times as I want." },
        { s: "M", t: "That's true. But don't you think it's harder to stay focused at home? There are so many distractions." },
        { s: "W", t: "It was a problem at first. Then I started following a fixed schedule, as if I were attending classes on campus. It really helps." },
        { s: "M", t: "Good idea. What about interaction with professors? Do you feel comfortable asking questions online?" },
        { s: "W", t: "Actually, I ask more questions now. In a huge lecture hall, I was too shy to raise my hand. But online, I can just type my questions in the chat box." },
        { s: "M", t: "Interesting. It seems online learning suits you better than I expected." }
      ],
      questions: [
        { q: "What are the speakers mainly discussing?", opts: ["A new campus building.", "Their experience of online learning.", "A professor's lecture style.", "How to make friends online."], a: 1 },
        { q: "How does the woman stay focused at home?", opts: ["By studying with friends.", "By following a fixed schedule.", "By turning off the Internet.", "By going to the library."], a: 1 },
        { q: "Why does the woman ask more questions in online classes?", opts: ["Professors require it.", "She can type instead of speaking publicly.", "The classes are smaller.", "She gets paid for asking."], a: 1 }
      ]
    },
    {
      id: "lc2", title: "长对话 2：环保生活方式",
      lines: [
        { s: "W", t: "David, I noticed you've been cycling to work every day. Is that part of a fitness plan?" },
        { s: "M", t: "Partly. But the main reason is to reduce my carbon footprint. I read a report saying transportation accounts for nearly 30 percent of carbon emissions in our city." },
        { s: "W", t: "That's impressive. I've been trying to live a greener life too. For example, I always bring my own shopping bags and refuse plastic straws." },
        { s: "M", t: "Small habits add up. Have you also tried cutting down on meat? Livestock farming produces a surprising amount of greenhouse gases." },
        { s: "W", t: "I've started having two meat-free days a week. Honestly, it wasn't as hard as I imagined." },
        { s: "M", t: "Maybe we can encourage more colleagues to join us. How about setting up a green living group in our office?" },
        { s: "W", t: "Great idea! Let's draft a proposal and present it to the manager this Friday." }
      ],
      questions: [
        { q: "What is the man's main reason for cycling to work?", opts: ["To save money.", "To reduce carbon emissions.", "To win a competition.", "His car broke down."], a: 1 },
        { q: "What does the woman do to live a greener life?", opts: ["She cycles to work.", "She brings her own shopping bags.", "She stopped eating meat entirely.", "She works from home."], a: 1 },
        { q: "What will the speakers probably do next?", opts: ["Buy new bicycles.", "Organize a green living group at work.", "Write a report on greenhouse gases.", "Present a proposal to the government."], a: 1 }
      ]
    }
  ],
  passages: [
    {
      id: "ps1", title: "短文 1：睡眠与记忆",
      text: "Scientists have long known that sleep plays a vital role in memory. During deep sleep, the brain replays the day's experiences and transfers them from short-term to long-term memory. In a recent study, researchers found that students who slept for at least eight hours after learning new words remembered 20 percent more words than those who stayed up late. Experts therefore suggest that instead of staying up all night before an exam, students would benefit more from a good night's sleep. Sleep, as it turns out, is not the enemy of study, but one of its most powerful allies.",
      questions: [
        { q: "What happens in the brain during deep sleep?", opts: ["It stops all activity.", "It replays and stores the day's experiences.", "It forgets unnecessary information.", "It produces new words."], a: 1 },
        { q: "How much more did well-rested students remember in the study?", opts: ["10 percent.", "15 percent.", "20 percent.", "30 percent."], a: 2 },
        { q: "What do experts suggest before an exam?", opts: ["Staying up all night.", "Reviewing all night.", "Having enough sleep.", "Learning new words."], a: 2 }
      ]
    },
    {
      id: "ps2", title: "短文 2：城市共享单车",
      text: "In recent years, shared bikes have appeared on the streets of many Chinese cities. They offer a cheap and convenient solution to the so-called last mile problem — the distance between a bus stop or subway station and one's final destination. Users can unlock a bike simply by scanning a QR code with a smartphone, and park it almost anywhere when they finish. However, the boom has also brought problems. In some cities, thousands of bikes are abandoned on sidewalks, blocking pedestrians. Now local governments and bike companies are working together to regulate parking spots and remove damaged bikes from the streets.",
      questions: [
        { q: "What problem do shared bikes mainly solve?", opts: ["Traffic jams on highways.", "The last mile problem.", "Air pollution from factories.", "The lack of subway lines."], a: 1 },
        { q: "How do users unlock a shared bike?", opts: ["With a key.", "By inserting coins.", "By scanning a QR code.", "By sending a text message."], a: 2 },
        { q: "What are governments and companies doing to deal with the problems?", opts: ["Banning all shared bikes.", "Raising rental prices.", "Regulating parking and removing damaged bikes.", "Building more sidewalks."], a: 2 }
      ]
    },
    {
      id: "ps3", title: "短文 3：过度使用智能手机",
      text: "Smartphones have become an inseparable part of modern life, but excessive use may harm both physical and mental health. Doctors report that patients who spend over six hours a day on their phones often suffer from neck pain, dry eyes and poor sleep. Psychologists, meanwhile, warn that constantly checking social media can increase anxiety, as people tend to compare their real lives with the seemingly perfect lives of others online. Some universities now offer digital detox programs, encouraging students to put away their phones for a few hours each day and engage in face-to-face conversation or outdoor activities. The goal is not to abandon technology, but to use it in a healthier, more balanced way.",
      questions: [
        { q: "According to doctors, what physical problems may heavy phone users have?", opts: ["Hearing loss.", "Neck pain and dry eyes.", "Weight gain.", "Tooth decay."], a: 1 },
        { q: "Why does social media increase anxiety according to psychologists?", opts: ["It is too expensive.", "People compare their lives with others' online.", "It spreads false news.", "It takes too much storage."], a: 1 },
        { q: "What is the goal of digital detox programs?", opts: ["To abandon technology completely.", "To sell fewer phones.", "To help people use technology more healthily.", "To increase screen time."], a: 2 }
      ]
    },
    {
      id: "ps4", title: "短文 4：人工智能的伦理挑战",
      text: "Artificial intelligence is reshaping every aspect of our lives, from healthcare to transportation. Yet as AI systems become more powerful, ethical concerns have moved to the center of public debate. One major issue is bias. AI models learn from historical data, which often reflects existing prejudices. If left unchecked, these systems can reinforce discrimination in hiring, lending, and law enforcement. Another challenge is accountability. When a self-driving car crashes or a medical AI makes a wrong diagnosis, who is responsible—the developer, the user, or the machine itself? Privacy is equally troubling. AI can analyze vast amounts of personal data, sometimes without users' explicit consent. To address these issues, experts call for transparent algorithms, stricter regulations, and diverse teams in AI development. Some countries have already begun drafting AI ethics guidelines, but enforcement remains difficult. The technology evolves faster than the law can adapt. Ultimately, the goal is not to slow down innovation, but to ensure that AI serves humanity fairly and safely.",
      questions: [
        { q: "What is the main ethical concern about AI bias mentioned in the passage?", opts: ["It slows down AI development.", "AI models can reinforce existing discrimination.", "It makes AI systems too expensive.", "It reduces AI accuracy."], a: 1, ex: "第二段：AI 从历史数据中学习，这些数据反映已有偏见，如不加以控制会强化歧视。" },
        { q: "What challenge does the passage raise about self-driving cars?", opts: ["They are too expensive to produce.", "It is unclear who is responsible when accidents happen.", "They cannot drive in bad weather.", "They consume too much energy."], a: 1, ex: "第三段：当自动驾驶汽车撞车时，责任归属不清。" },
        { q: "How do experts suggest addressing AI ethical issues?", opts: ["By stopping all AI research.", "Through transparent algorithms, regulations, and diverse teams.", "By making AI open-source only.", "By limiting AI to military use."], a: 1, ex: "第四段：专家呼吁透明算法、更严格的法规和多元化的 AI 开发团队。" },
        { q: "What does the passage say about AI regulations?", opts: ["They are fully enforced worldwide.", "The technology evolves faster than laws can adapt.", "No country has started drafting them.", "They are unnecessary."], a: 1, ex: "第五段：一些国家已开始起草 AI 伦理指南，但执行仍困难。" }
      ]
    }
  ],
  dictations: [
    {
      id: "dt1", title: "听写 1：教育的本质",
      text: "Education is not merely about {{memorizing}} facts; it is about learning how to {{think}}. A good teacher does not simply pass on {{knowledge}}, but inspires students to ask {{questions}} and seek answers by themselves.",
      zh: "教育不仅仅是记忆事实，更是学会如何思考。好的老师不只是传授知识，而是激励学生提出问题并自己寻找答案。"
    },
    {
      id: "dt2", title: "听写 2：环境保护",
      text: "Protecting the {{environment}} requires the joint efforts of the government, {{enterprises}} and every {{citizen}}. Small changes in daily life, such as saving {{water}} and recycling waste, can make a real {{difference}} to our planet.",
      zh: "保护环境需要政府、企业和每个公民的共同努力。日常生活中的小改变，比如节约用水、回收垃圾，能为地球带来真正的改变。"
    },
    {
      id: "dt3", title: "听写 3：科技与生活",
      text: "Technology has {{transformed}} the way we live, work and {{communicate}}. However, while enjoying the {{convenience}} it brings, we should also be aware of its potential {{risks}}, such as privacy leaks and information {{overload}}.",
      zh: "科技改变了我们生活、工作和交流的方式。然而，在享受它带来的便利的同时，我们也应警惕其潜在风险，如隐私泄露和信息过载。"
    },
    {
      id: "dt4", title: "听写 4：坚持的力量",
      text: "Success rarely comes {{overnight}}. Behind every achievement are countless hours of {{practice}} and repeated {{failures}}. Those who finally succeed are not necessarily the most {{talented}}, but the ones who never give {{up}}.",
      zh: "成功很少一蹴而就。每一项成就背后都是无数小时的练习和一次次失败。最终成功的人未必是最有天赋的，而是从不放弃的人。"
    },
    {
      id: "dt5", title: "听写 5：全球化与本土文化",
      text: "Globalization has brought people {{closer}} together, but it also threatens the survival of local {{cultures}}. When everyone watches the same movies and buys the same {{products}}, traditional customs gradually {{disappear}}. It is our {{responsibility}} to protect cultural diversity.",
      zh: "全球化使人们更加紧密，但也威胁着本土文化的生存。当人们看同样的电影、买同样的产品时，传统习俗逐渐消失。保护文化多样性是我们的责任。"
    },
    {
      id: "dt6", title: "听写 6：终身学习",
      text: "In a world where knowledge becomes {{outdated}} quickly, lifelong learning is no longer a {{choice}} but a {{necessity}}. Those who keep learning throughout their lives are more likely to {{adapt}} to changes and seize new {{opportunities}}.",
      zh: "在知识快速过时的世界里，终身学习不再是一种选择而是必需。终身学习的人更有可能适应变化并抓住新机遇。"
    }
  ]
};
