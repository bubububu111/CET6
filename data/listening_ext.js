/* 六级听力扩展素材包 —— 补充短对话+长对话+短文理解
 * 来源：六级真题风格改编，2016-2026年热点话题
 */
(function () {
  if (!window.CET6_LISTENING) return;

  var extShort = [
    {
      id: "sc5", title: "短对话 5：选课注册",
      lines: [
        { s: "W", t: "I can't register for the advanced chemistry course because the system says I haven't taken the prerequisite." },
        { s: "M", t: "You should go to the department office and ask for a waiver. If you can show you studied similar material before, they might let you in." }
      ],
      questions: [
        { q: "Why can't the woman register for the course?", opts: ["The course is full.", "She lacks the prerequisite.", "The registration system is down.", "She changed her major."], a: 1 },
        { q: "What does the man suggest the woman do?", opts: ["Take an easier course.", "Ask for a waiver at the department office.", "Wait until next semester.", "Study the prerequisite by herself."], a: 1 }
      ]
    },
    {
      id: "sc6", title: "短对话 6：宿舍空调问题",
      lines: [
        { s: "W", t: "The air conditioner in my dorm has been broken for three days. I called maintenance twice but nobody came." },
        { s: "M", t: "You should report it to the dorm supervisor directly. Maintenance usually responds faster when the supervisor calls." }
      ],
      questions: [
        { q: "What is the woman's problem?", opts: ["Her dorm is too cold.", "The air conditioner is broken.", "She missed the maintenance visit.", "She cannot pay the utility bill."], a: 1 },
        { q: "What does the man suggest?", opts: ["Buy a fan.", "Call maintenance again.", "Report to the dorm supervisor.", "Move to another room."], a: 2 }
      ]
    },
    {
      id: "sc7", title: "短对话 7：实习面试",
      lines: [
        { s: "M", t: "I have an internship interview at a marketing firm tomorrow. I'm really nervous about it." },
        { s: "W", t: "Just be yourself and prepare some questions to ask them. Interviewers like candidates who show genuine interest in the company." }
      ],
      questions: [
        { q: "Why is the man nervous?", opts: ["He has a final exam tomorrow.", "He has an internship interview.", "He is giving a presentation.", "He is meeting his new boss."], a: 1 },
        { q: "What does the woman advise the man to do?", opts: ["Wear a formal suit.", "Prepare questions to ask the interviewer.", "Arrive one hour early.", "Memorize all answers."], a: 1 }
      ]
    },
    {
      id: "sc8", title: "短对话 8：期末考试",
      lines: [
        { s: "W", t: "I've been pulling all-nighters for the finals, but I still feel I haven't covered everything." },
        { s: "M", t: "Maybe you should focus on the key points the professor emphasized. Trying to memorize everything is not efficient at this point." }
      ],
      questions: [
        { q: "What is the woman doing?", opts: ["Preparing for final exams.", "Writing a research paper.", "Applying for graduate school.", "Working on a group project."], a: 0 },
        { q: "What does the man suggest?", opts: ["Studying all night.", "Focusing on key points.", "Asking the professor for help.", "Taking a break from studying."], a: 1 }
      ]
    },
    {
      id: "sc9", title: "短对话 9：图书馆占座",
      lines: [
        { s: "M", t: "It's impossible to find a seat in the library these days. People leave their bags on chairs and disappear for hours." },
        { s: "W", t: "I know. The library should really do something about seat reservation. Maybe they can set a time limit for leaving personal items." }
      ],
      questions: [
        { q: "What is the man complaining about?", opts: ["The library is too noisy.", "Books are hard to find.", "Seats are occupied by absent people.", "The library closes too early."], a: 2 },
        { q: "What solution does the woman suggest?", opts: ["Building a bigger library.", "Setting a time limit for personal items on seats.", "Asking students to study at home.", "Increasing library fines."], a: 1 }
      ]
    },
    {
      id: "sc10", title: "短对话 10：远程工作",
      lines: [
        { s: "W", t: "I've been working from home for two months now. Sometimes I find it hard to separate work from personal life." },
        { s: "M", t: "I had the same problem. What helped me was setting up a dedicated workspace and sticking to regular work hours." }
      ],
      questions: [
        { q: "What problem does the woman have with remote work?", opts: ["She misses her colleagues.", "Her internet connection is unstable.", "She cannot separate work and personal life.", "She works fewer hours than before."], a: 2 },
        { q: "What helped the man with remote work?", opts: ["Working longer hours.", "A dedicated workspace and regular hours.", "Taking more coffee breaks.", "Moving to a bigger apartment."], a: 1 }
      ]
    },
    {
      id: "sc11", title: "短对话 11：升职机会",
      lines: [
        { s: "M", t: "Our manager told me I'm being considered for the team leader position. What do you think I should do?" },
        { s: "W", t: "Congratulations! I'd say take it. It's a great chance to develop your leadership skills, even if it means more responsibility." }
      ],
      questions: [
        { q: "What good news does the man have?", opts: ["He got a salary raise.", "He is being considered for a promotion.", "He is transferring to another city.", "He won an award."], a: 1 },
        { q: "What is the woman's advice?", opts: ["Turn down the offer.", "Wait for a better opportunity.", "Accept the position.", "Ask for more money first."], a: 2 }
      ]
    },
    {
      id: "sc12", title: "短对话 12：办公室矛盾",
      lines: [
        { s: "W", t: "I feel like my colleague always takes credit for my work in front of the boss. It's really frustrating." },
        { s: "M", t: "You should speak up during meetings when he does that. Politely mention your contribution so everyone knows your role." }
      ],
      questions: [
        { q: "Why is the woman frustrated?", opts: ["Her colleague takes credit for her work.", "She was passed over for promotion.", "Her boss is too demanding.", "She has too much work to do."], a: 0 },
        { q: "What does the man suggest the woman do?", opts: ["Complain to HR.", "Speak up about her contribution in meetings.", "Quit her job.", "Do the same thing to her colleague."], a: 1 }
      ]
    },
    {
      id: "sc13", title: "短对话 13：求职反馈",
      lines: [
        { s: "M", t: "I had a job interview last week but I haven't heard back. Should I send a follow-up email?" },
        { s: "W", t: "Definitely. It shows you're still interested. Just keep it brief and polite, and thank them for the opportunity." }
      ],
      questions: [
        { q: "What is the man unsure about?", opts: ["Whether to accept a job offer.", "Whether to send a follow-up email after an interview.", "Whether to quit his current job.", "Whether he performed well in the interview."], a: 1 },
        { q: "What does the woman say about the follow-up?", opts: ["It is unnecessary.", "It should be long and detailed.", "It shows continued interest.", "It might annoy the employer."], a: 2 }
      ]
    },
    {
      id: "sc14", title: "短对话 14：旅行计划",
      lines: [
        { s: "W", t: "My flight to Chengdu was canceled because of the storm. I'm not sure when I can get there." },
        { s: "M", t: "Why not take the high-speed train instead? It only takes about seven hours from here and tickets are usually available." }
      ],
      questions: [
        { q: "Why can't the woman fly to Chengdu?", opts: ["She missed her flight.", "The flight was canceled due to a storm.", "She is afraid of flying.", "The tickets are too expensive."], a: 1 },
        { q: "What alternative does the man suggest?", opts: ["Taking a bus.", "Driving there by car.", "Taking the high-speed train.", "Waiting for the next flight."], a: 2 }
      ]
    },
    {
      id: "sc15", title: "短对话 15：退货问题",
      lines: [
        { s: "M", t: "I bought this jacket online last week, but it doesn't fit. The website says returns are accepted within 30 days." },
        { s: "W", t: "You should initiate the return on their website first, then ship it back. Don't forget to keep the tracking number." }
      ],
      questions: [
        { q: "Why does the man want to return the jacket?", opts: ["It is damaged.", "It is the wrong color.", "It doesn't fit.", "He found a cheaper one."], a: 2 },
        { q: "What does the woman remind the man to do?", opts: ["Keep the tracking number.", "Call customer service first.", "Wash the jacket before returning.", "Return it within 7 days."], a: 0 }
      ]
    },
    {
      id: "sc16", title: "短对话 16：健康咨询",
      lines: [
        { s: "W", t: "I've been having headaches every afternoon lately. I think it's because I stare at my computer screen too long." },
        { s: "M", t: "Try the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. It really helps with eye strain." }
      ],
      questions: [
        { q: "What causes the woman's headaches according to her?", opts: ["Lack of sleep.", "Staring at the computer screen too long.", "High blood pressure.", "Stress from work."], a: 1 },
        { q: "What is the 20-20-20 rule about?", opts: ["Taking breaks from screen use to reduce eye strain.", "Exercising for 20 minutes three times a day.", "Drinking 20 glasses of water a day.", "Sleeping for at least 20 hours per week."], a: 0 }
      ]
    },
    {
      id: "sc17", title: "短对话 17：天气突变",
      lines: [
        { s: "M", t: "The weather forecast says it will be 28 degrees and sunny this weekend. Perfect for hiking!" },
        { s: "W", t: "Wait, I just checked an hour ago and it said there would be thunderstorms. You might want to double-check before you go." }
      ],
      questions: [
        { q: "What are the speakers talking about?", opts: ["Weekend work plans.", "The weather forecast for the weekend.", "Their favorite outdoor activities.", "The best hiking trails nearby."], a: 1 },
        { q: "What does the woman suggest?", opts: ["Going hiking on Saturday.", "Double-checking the weather forecast.", "Wearing warm clothes.", "Staying at home all weekend."], a: 1 }
      ]
    },
    {
      id: "sc18", title: "短对话 18：租房讨论",
      lines: [
        { s: "W", t: "I found a nice apartment near the subway, but the rent is 500 yuan higher than my budget." },
        { s: "M", t: "You could look for a roommate to split the cost. Having someone share the rent and utilities makes a big difference." }
      ],
      questions: [
        { q: "What is the woman's problem with the apartment?", opts: ["It is too small.", "It is too far from the subway.", "The rent is above her budget.", "It is not furnished."], a: 2 },
        { q: "What solution does the man propose?", opts: ["Negotiating with the landlord.", "Finding a roommate.", "Looking for a cheaper apartment.", "Moving back to her parents' house."], a: 1 }
      ]
    },
    {
      id: "sc19", title: "短对话 19：朋友吵架",
      lines: [
        { s: "M", t: "I had a big argument with my best friend yesterday. I said some things I shouldn't have and now I feel terrible." },
        { s: "W", t: "I think you should call her and apologize. True friendship is worth more than being right about a small disagreement." }
      ],
      questions: [
        { q: "Why does the man feel terrible?", opts: ["He lost his best friend's phone.", "He argued with his best friend and said hurtful things.", "He missed his friend's birthday party.", "He borrowed money and forgot to pay back."], a: 1 },
        { q: "What does the woman advise the man to do?", opts: ["Wait for his friend to call first.", "Buy his friend a gift.", "Call and apologize.", "Give the friendship some time."], a: 2 }
      ]
    },
    {
      id: "sc20", title: "短对话 20：家庭聚会",
      lines: [
        { s: "W", t: "My parents are coming to visit this weekend. I want to cook something special for them but I'm not a good cook." },
        { s: "M", t: "Why not order some dishes from that restaurant they like and add a homemade dessert? The gesture matters more than perfect cooking." }
      ],
      questions: [
        { q: "What is the woman worried about?", opts: ["Her parents won't like her apartment.", "She cannot cook well for her parents' visit.", "She has to work on the weekend.", "Her parents are arriving too early."], a: 1 },
        { q: "What does the man suggest?", opts: ["Taking her parents to a restaurant.", "Ordering dishes plus making a homemade dessert.", "Learning to cook from a recipe book.", "Asking her parents to bring food."], a: 1 }
      ]
    },
    {
      id: "sc21", title: "短对话 21：同事协作",
      lines: [
        { s: "M", t: "I'm working on a project with a colleague who never responds to my messages. We are falling behind schedule." },
        { s: "W", t: "Have you tried talking to him face to face? Some people are just slow with emails but respond well to direct conversations." }
      ],
      questions: [
        { q: "What problem is the man facing at work?", opts: ["He has too much work.", "His colleague doesn't respond to messages.", "He missed a deadline.", "He doesn't get along with his boss."], a: 1 },
        { q: "What does the woman suggest?", opts: ["Reporting the colleague to the boss.", "Talking to the colleague face to face.", "Doing all the work himself.", "Sending more reminder emails."], a: 1 }
      ]
    },
    {
      id: "sc22", title: "短对话 22：退课犹豫",
      lines: [
        { s: "W", t: "I'm thinking about dropping the philosophy class. The readings are so heavy and I already have five courses this semester." },
        { s: "M", t: "Before you drop it, maybe you can talk to the professor about reducing the workload. Sometimes they are flexible if you explain your situation." }
      ],
      questions: [
        { q: "Why does the woman want to drop the philosophy class?", opts: ["She is not interested in philosophy.", "The professor is too strict.", "The readings are heavy and she has many courses.", "The class meets too early in the morning."], a: 2 },
        { q: "What does the man suggest before dropping the class?", opts: ["Talking to the professor about the workload.", "Finding a tutor.", "Reading only the important chapters.", "Switching to another philosophy class."], a: 0 }
      ]
    },
    {
      id: "sc23", title: "短对话 23：加班困扰",
      lines: [
        { s: "M", t: "I've been working overtime every day this week. I haven't had time for anything else." },
        { s: "W", t: "That sounds exhausting. You should talk to your manager about the workload. Constant overtime is not sustainable." }
      ],
      questions: [
        { q: "What is the man's complaint?", opts: ["His salary is too low.", "He has been working overtime every day.", "He doesn't like his colleagues.", "His commute is too long."], a: 1 },
        { q: "What does the woman suggest?", opts: ["Quitting the job.", "Working faster.", "Talking to the manager about the workload.", "Taking a vacation."], a: 2 }
      ]
    },
    {
      id: "sc24", title: "短对话 24：餐厅等位",
      lines: [
        { s: "W", t: "The wait for a table at this restaurant is 45 minutes. I'm starving. Do you think we should go somewhere else?" },
        { s: "M", t: "Let's wait a bit. I heard their signature dish is absolutely worth it. We can have some drinks at the bar while we wait." }
      ],
      questions: [
        { q: "Why does the woman want to go somewhere else?", opts: ["She doesn't like the food there.", "The wait is too long and she is hungry.", "The restaurant is too expensive.", "She saw a better restaurant nearby."], a: 1 },
        { q: "What does the man suggest doing while waiting?", opts: ["Walking around the block.", "Having drinks at the bar.", "Ordering takeout instead.", "Playing games on the phone."], a: 1 }
      ]
    }
  ];

  var extLong = [
    {
      id: "lc3", title: "长对话 3：职业规划讨论",
      lines: [
        { s: "W", t: "Hi Mark, I noticed you've been attending a lot of career workshops lately. Are you thinking about changing jobs?" },
        { s: "M", t: "Not exactly changing jobs, but I want to plan my career more carefully. I've been in the same position for three years and I feel like I'm not growing." },
        { s: "W", t: "I understand. What kind of career path are you interested in?" },
        { s: "M", t: "I'm considering two directions. One is moving into management, the other is becoming a senior technical specialist. I'm not sure which suits me better." },
        { s: "W", t: "Have you tried talking to people who are already in those roles? They can give you a realistic picture of what the job is like." },
        { s: "M", t: "That's a good idea. I do know a few project managers and senior engineers in the company. I just wasn't sure how to approach them." },
        { s: "W", t: "Just ask them out for coffee. Most people are happy to share their experiences and give advice." },
        { s: "M", t: "You're right. I should also think about my long-term goals. Do I want to lead teams, or do I prefer deep technical work?" },
        { s: "W", t: "Exactly. And remember, it's okay to try something and change your mind later. Career paths don't have to be straight lines." }
      ],
      questions: [
        { q: "Why has Mark been attending career workshops?", opts: ["He wants to change jobs immediately.", "He wants to plan his career more carefully.", "He is required to by his company.", "He wants to meet new people."], a: 1 },
        { q: "What two career directions is Mark considering?", opts: ["Sales and marketing.", "Management and technical specialist.", "Teaching and research.", "Design and development."], a: 1 },
        { q: "What does the woman suggest Mark do?", opts: ["Take an online course.", "Talk to people in those roles.", "Quit his job and explore.", "Wait for a promotion."], a: 1 },
        { q: "What is the woman's view on career paths?", opts: ["They must be planned perfectly.", "They don't have to be straight lines.", "They are determined by education.", "They should be changed every year."], a: 1 }
      ]
    },
    {
      id: "lc4", title: "长对话 4：出国留学准备",
      lines: [
        { s: "M", t: "Lisa, I heard you're planning to study abroad next year. Which country are you going to?" },
        { s: "W", t: "I'm applying to universities in the UK. I want to get a master's degree in international relations." },
        { s: "M", t: "That sounds exciting. How is the application process going so far?" },
        { s: "W", t: "Well, I've taken the IELTS and got a 7.0. Now I'm working on my personal statement and gathering recommendation letters." },
        { s: "M", t: "What made you choose the UK specifically? A lot of people go to the US or Australia these days." },
        { s: "W", t: "I've always been interested in British history and politics. Also, most master's programs in the UK only take one year, which saves time and money." },
        { s: "M", t: "That's a good point. Have you thought about how you'll finance your studies?" },
        { s: "W", t: "I've been saving money from my part-time job, and my parents will help with the rest. I'm also applying for a few scholarships." },
        { s: "M", t: "Great. I hope everything works out for you. You'll have to tell me all about it once you get there." }
      ],
      questions: [
        { q: "What does Lisa plan to study abroad?", opts: ["A bachelor's degree in business.", "A master's degree in international relations.", "A PhD in history.", "A language course."], a: 1 },
        { q: "What is Lisa currently working on for her application?", opts: ["Preparing for the IELTS exam.", "Her personal statement and recommendation letters.", "Booking flights and accommodation.", "Finding a part-time job in the UK."], a: 1 },
        { q: "Why did Lisa choose the UK?", opts: ["It is cheaper than other countries.", "She is interested in British history and the programs are shorter.", "Her family lives there.", "The universities are easier to get into."], a: 1 },
        { q: "How will Lisa finance her studies?", opts: ["Fully from scholarships.", "From her savings, parental support, and scholarships.", "From a bank loan.", "By working full-time while studying."], a: 1 }
      ]
    },
    {
      id: "lc5", title: "长对话 5：可持续生活方式",
      lines: [
        { s: "W", t: "James, I was really inspired by that documentary about zero-waste living. I want to make some changes in my own life." },
        { s: "M", t: "That's wonderful! I started my zero-waste journey about a year ago. The key is to start small and not try to change everything at once." },
        { s: "W", t: "Where should I start? I feel overwhelmed thinking about all the things I need to change." },
        { s: "M", t: "Begin with the easiest things. For example, carry a reusable water bottle and a cloth shopping bag. Then gradually add more changes." },
        { s: "W", t: "What about food waste? I always end up throwing away vegetables that go bad in the fridge." },
        { s: "M", t: "Planning meals before going shopping helps a lot. Make a list and buy only what you need. Also, learn to store vegetables properly." },
        { s: "W", t: "I've also been thinking about fast fashion. I buy too many clothes I don't really need." },
        { s: "M", t: "Try buying second-hand or swapping clothes with friends. And when you do buy new, choose quality pieces that will last longer." },
        { s: "W", t: "Thanks for all the tips. I feel more motivated now. Maybe we can check out that zero-waste shop downtown together sometime." }
      ],
      questions: [
        { q: "What inspired the woman to make lifestyle changes?", opts: ["A book about minimalism.", "A documentary about zero-waste living.", "A friend's new apartment.", "A trip abroad."], a: 1 },
        { q: "What does the man say about starting a zero-waste lifestyle?", opts: ["Change everything at once.", "Start small and add changes gradually.", "It is too difficult for most people.", "You need to spend a lot of money."], a: 1 },
        { q: "How does the man suggest reducing food waste?", opts: ["By eating out more.", "By meal planning and buying only what is needed.", "By buying frozen vegetables only.", "By composting everything."], a: 1 },
        { q: "What does the man suggest about clothing?", opts: ["Buy more fast fashion items.", "Try second-hand or swap clothes, and buy quality pieces.", "Stop buying clothes entirely.", "Only buy clothes online."], a: 1 }
      ]
    },
    {
      id: "lc6", title: "长对话 6：科技产品讨论",
      lines: [
        { s: "M", t: "Hey Amy, the new smartphone just came out. Are you planning to upgrade yours?" },
        { s: "W", t: "Not really. My current phone works fine, and I don't see enough new features to justify the price." },
        { s: "M", t: "But it has a better camera, a faster processor, and longer battery life. Those are significant improvements." },
        { s: "W", t: "I'm sure they are, but I only use my phone for calling, messaging, and social media. I don't need the latest specs." },
        { s: "M", t: "Fair enough. I'm a bit of a tech enthusiast, so I always want the newest gadgets. I pre-ordered mine yesterday." },
        { s: "W", t: "Don't you think it's wasteful to replace a perfectly good phone every year or two? Think about the environmental impact." },
        { s: "M", t: "You have a point. I usually sell my old phone, so at least it gets reused by someone else." },
        { s: "W", t: "That's better than throwing it away, I guess. I try to keep my devices for as long as possible. My last phone lasted me four years." },
        { s: "M", t: "Wow, that's impressive. Maybe I should reconsider my upgrade cycle. New phones are getting really expensive these days." }
      ],
      questions: [
        { q: "Why doesn't the woman want to upgrade her phone?", opts: ["She can't afford it.", "Her current phone works fine and she doesn't need new features.", "She doesn't like the new design.", "She is waiting for the next model."], a: 1 },
        { q: "What does the man think about the new phone?", opts: ["It is not worth the price.", "It has significant improvements.", "It is too big.", "It has too many features."], a: 1 },
        { q: "What concern does the woman raise about frequent upgrades?", opts: ["Security risks.", "Environmental impact.", "High cost.", "Lack of innovation."], a: 1 },
        { q: "What does the man do with his old phones?", opts: ["He throws them away.", "He gives them to family members.", "He sells them.", "He keeps them as backups."], a: 2 }
      ]
    },
    {
      id: "lc7", title: "长对话 7：健康与健身计划",
      lines: [
        { s: "W", t: "Tom, I've been feeling really out of shape lately. I want to start exercising but I don't know where to begin." },
        { s: "M", t: "I'm glad you want to get active. The most important thing is to find something you enjoy, so you'll stick with it." },
        { s: "W", t: "I used to like swimming in college, but the pool near my apartment is always crowded." },
        { s: "M", t: "What about running? All you need is a pair of good shoes and you can do it anywhere. Start with just 20 minutes a day." },
        { s: "W", t: "Running sounds okay, but I get bored easily. I prefer working out with other people." },
        { s: "M", t: "Then maybe you should try a group fitness class, like yoga or spinning. There are some great studios near the office." },
        { s: "W", t: "Yoga sounds nice. I've heard it helps with both physical strength and mental relaxation." },
        { s: "M", t: "It definitely does. I go to a class every Wednesday evening. You could come with me sometime and try it out for free." },
        { s: "W", t: "Really? That would be great. Let's go next Wednesday. I'll need to buy a yoga mat first though." },
        { s: "M", t: "The studio has mats you can borrow, so don't worry about that. Just wear comfortable clothes and bring a water bottle." }
      ],
      questions: [
        { q: "Why does the woman want to start exercising?", opts: ["She wants to lose weight quickly.", "She has been feeling out of shape.", "Her doctor told her to.", "She is training for a race."], a: 1 },
        { q: "What does the man say is most important for starting exercise?", opts: ["Finding something you enjoy.", "Exercising every day.", "Joining an expensive gym.", "Getting a personal trainer."], a: 0 },
        { q: "Why doesn't the woman want to go running?", opts: ["She doesn't have running shoes.", "She finds it boring.", "It is too tiring.", "She has a knee injury."], a: 1 },
        { q: "What will the woman probably do next Wednesday?", opts: ["Go swimming.", "Try a yoga class with the man.", "Buy a new gym membership.", "Start running in the park."], a: 1 }
      ]
    },
    {
      id: "lc8", title: "长对话 8：文化交流体验",
      lines: [
        { s: "M", t: "How was your stay with the host family in France? I bet it was an amazing cultural experience." },
        { s: "W", t: "It was incredible! Living with a local family was so much better than staying in a hotel. I learned so much about daily French life." },
        { s: "M", t: "What was the biggest surprise for you?" },
        { s: "W", t: "How long their meals are. Dinner usually starts at 8 pm and lasts for two or three hours. They take their time and really enjoy the food and conversation." },
        { s: "M", t: "That does sound different from our quick meals here. Did you have trouble with the language?" },
        { s: "W", t: "At first, yes. I studied French in school but listening to native speakers speak so fast was challenging. But by the end of the month, I had improved a lot." },
        { s: "M", t: "That's the best way to learn a language, total immersion. Did you try any traditional French dishes?" },
        { s: "W", t: "Oh yes! The host mother was an amazing cook. My favorite was coq au vin, which is chicken cooked in red wine. And of course, the cheese selection was unbelievable." },
        { s: "M", t: "Now I'm getting hungry. Would you recommend doing a homestay to other students?" },
        { s: "W", t: "Absolutely! It can be a bit uncomfortable at first, but it's totally worth it. You make real connections and learn things you could never get from a textbook." }
      ],
      questions: [
        { q: "What did the woman think of her homestay experience?", opts: ["It was boring.", "It was incredible and educational.", "It was too expensive.", "It was uncomfortable throughout."], a: 1 },
        { q: "What surprised the woman most about French life?", opts: ["How early people wake up.", "How long dinner lasts.", "How expensive food is.", "How friendly people are."], a: 1 },
        { q: "How was the woman's French at the end of her stay?", opts: ["It hadn't improved at all.", "It had improved a lot.", "She could only speak basic phrases.", "She forgot everything she learned."], a: 1 },
        { q: "What was the woman's favorite French dish?", opts: ["Croissants.", "Coq au vin.", "Baguette.", "Cheese souffle."], a: 1 }
      ]
    },
    {
      id: "lc9", title: "长对话 9：学业压力与应对",
      lines: [
        { s: "W", t: "Daniel, you look exhausted. Are you okay?" },
        { s: "M", t: "I'm just really stressed about my thesis and job applications. I feel like I have a million things to do and not enough time." },
        { s: "W", t: "I totally understand. Final year is tough. Have you been sleeping enough?" },
        { s: "M", t: "Barely. I've been pulling all-nighters almost every day. I can't afford to waste time sleeping." },
        { s: "W", t: "That's actually counterproductive. Lack of sleep reduces your focus and productivity. You might get more done if you rest properly." },
        { s: "M", t: "I guess you're right. But every time I try to sleep, I just lie awake worrying about everything." },
        { s: "W", t: "Have you tried making a to-do list and prioritizing your tasks? Breaking things down into smaller steps can make them feel less overwhelming." },
        { s: "M", t: "I have a list, but it's so long that it just makes me more anxious." },
        { s: "W", t: "Then focus on just three important things each day. Small wins build up. Also, make sure to take short breaks and go outside for some fresh air." },
        { s: "M", t: "Thanks for the advice. I'll try to take better care of myself. I know I can't keep going like this for much longer." }
      ],
      questions: [
        { q: "Why is Daniel stressed?", opts: ["He failed an exam.", "He is worried about his thesis and job applications.", "He lost his scholarship.", "He has relationship problems."], a: 1 },
        { q: "What does the woman say about lack of sleep?", opts: ["It is necessary for students.", "It reduces focus and productivity.", "It is a sign of hard work.", "It can be fixed with coffee."], a: 1 },
        { q: "What does the woman suggest about task management?", opts: ["Do everything at once.", "Focus on three important things each day.", "Work longer hours.", "Wait until the last minute."], a: 1 },
        { q: "What is the woman's overall advice to Daniel?", opts: ["Work harder.", "Take better care of himself.", "Drop some courses.", "Ask for extensions."], a: 1 }
      ]
    },
    {
      id: "lc10", title: "长对话 10：社区志愿服务",
      lines: [
        { s: "M", t: "Hey Sophie, I saw you at the community center last weekend. Were you volunteering there?" },
        { s: "W", t: "Yes, I help teach English to elderly people every Saturday morning. It's really rewarding." },
        { s: "M", t: "That sounds interesting. What made you decide to do that?" },
        { s: "W", t: "Well, my grandmother always wanted to learn English but never had the chance. When I heard about the program, I thought it would be a great way to help people like her." },
        { s: "M", t: "That's really thoughtful. Is it difficult to teach older people?" },
        { s: "W", t: "They learn more slowly than young people, but they are so motivated and appreciative. Their enthusiasm makes it all worthwhile." },
        { s: "M", t: "I've been wanting to do some volunteer work too, but I never know where to start." },
        { s: "W", t: "There are so many opportunities. You could help at the food bank, tutor kids, or visit nursing homes. What are you interested in?" },
        { s: "M", t: "I like working with children. Maybe I could help with after-school programs." },
        { s: "W", t: "Perfect! The community center is always looking for volunteers for their after-school reading program. I can introduce you to the coordinator if you want." },
        { s: "M", t: "That would be great. Thanks, Sophie. I'm actually looking forward to it." }
      ],
      questions: [
        { q: "What does Sophie do on Saturday mornings?", opts: ["She works at a café.", "She teaches English to elderly people.", "She studies for her exams.", "She goes shopping."], a: 1 },
        { q: "What inspired Sophie to start volunteering?", opts: ["A school requirement.", "Her grandmother who wanted to learn English.", "A documentary about education.", "Her friend's suggestion."], a: 1 },
        { q: "What does Sophie say about teaching older people?", opts: ["It is very easy.", "They learn slowly but are motivated and appreciative.", "It is not worth the effort.", "They never show up on time."], a: 1 },
        { q: "What kind of volunteer work is the man interested in?", opts: ["Working with animals.", "Helping with after-school programs for kids.", "Serving food at a shelter.", "Cleaning up parks."], a: 1 }
      ]
    }
  ];

  var extPassages = [
    {
      id: "lp1", title: "短文理解 1：人工智能的发展历程",
      text: "Artificial intelligence, or AI, may seem like a cutting-edge technology of the 21st century, but its roots go back much further. The term artificial intelligence was first coined in 1956 at a conference at Dartmouth College, where a group of scientists gathered to discuss the possibility of creating machines that could think. In the decades that followed, AI research went through several cycles of optimism and disappointment. Periods of rapid progress, known as AI summers, were followed by AI winters when funding dried up due to unmet expectations. The turning point came around 2012, when a technique called deep learning revolutionized the field. Powered by massive amounts of data and increasingly powerful computers, deep learning algorithms began outperforming humans at specific tasks, from image recognition to playing complex board games. Today, AI is integrated into many aspects of daily life, often without us noticing. It powers recommendation systems on streaming platforms, voice assistants on our phones, and fraud detection in banking. While the dream of creating general artificial intelligence that equals human intelligence across all domains remains distant, narrow AI continues to advance at a remarkable pace, transforming industries and raising important ethical questions about the future of work and society.",
      questions: [
        { q: "When was the term artificial intelligence first coined?", opts: ["In 1945.", "In 1956.", "In 2000.", "In 2012."], a: 1 },
        { q: "What caused AI winters according to the passage?", opts: ["Lack of talented researchers.", "Unmet expectations leading to funding cuts.", "Government bans on AI research.", "The rise of personal computers."], a: 1 },
        { q: "What was the turning point for AI around 2012?", opts: ["The invention of the Internet.", "The development of deep learning.", "The first AI company went public.", "Robots became affordable."], a: 1 },
        { q: "What does the passage say about general artificial intelligence?", opts: ["It has already been achieved.", "It is expected within five years.", "It remains a distant goal.", "It is impossible to create."], a: 2 }
      ]
    },
    {
      id: "lp2", title: "短文理解 2：城市绿化的重要性",
      text: "As more and more people move to cities, urban green spaces have become increasingly valuable. Parks, gardens, and street trees do much more than make cities look beautiful. They play a crucial role in improving public health, reducing pollution, and combating climate change. Trees absorb carbon dioxide and release oxygen, helping to clean the air we breathe. They also provide shade, which can lower city temperatures by several degrees during hot summer months. This effect, known as evaporative cooling, is especially important as heat waves become more frequent and intense. Studies have shown that people who live near green spaces report lower levels of stress and better mental health. Children who grow up with access to parks and nature tend to have stronger immune systems and better cognitive development. Green spaces also encourage physical activity, from jogging and cycling to simply taking a walk. Despite these benefits, many cities around the world are losing green space to development. Some cities are now fighting back with creative solutions, such as green rooftops, vertical gardens, and converting abandoned industrial areas into public parks. Singapore, for example, has set a goal to cover 80 percent of its buildings with greenery by 2030. As urban populations continue to grow, investing in urban greenery is not just a luxury but a necessity for sustainable and livable cities.",
      questions: [
        { q: "What is one benefit of urban trees mentioned in the passage?", opts: ["They increase property values.", "They lower city temperatures through shade and evaporative cooling.", "They attract tourists.", "They reduce noise pollution by 50 percent."], a: 1 },
        { q: "What have studies shown about people living near green spaces?", opts: ["They earn higher salaries.", "They report lower stress levels and better mental health.", "They spend more money outdoors.", "They have larger families."], a: 1 },
        { q: "What creative solution does the passage mention for adding green space to cities?", opts: ["Building more highways.", "Green rooftops and vertical gardens.", "Moving people to rural areas.", "Painting buildings green."], a: 1 },
        { q: "What goal has Singapore set for greenery by 2030?", opts: ["Plant one million trees.", "Cover 80 percent of buildings with greenery.", "Create 100 new parks.", "Reduce temperature by 5 degrees."], a: 1 }
      ]
    },
    {
      id: "lp3", title: "短文理解 3：在线学习的兴起",
      text: "Online learning has transformed education in ways few could have imagined just two decades ago. What began as a niche alternative for distance education has become a mainstream method of learning, accelerated by global events that forced schools and universities to shift to remote instruction. The advantages of online learning are numerous. It offers flexibility, allowing students to learn at their own pace and on their own schedule. This is especially valuable for working adults who want to advance their careers without quitting their jobs. Geographic barriers disappear when learning happens online. A student in a small town can take courses from top universities around the world. Digital platforms also provide access to a wealth of resources, from recorded lectures and interactive quizzes to discussion forums where students can collaborate. However, online learning is not without challenges. Students need strong self-discipline and time management skills to succeed without the structure of a physical classroom. The digital divide, the gap between those with reliable internet access and those without, remains a significant barrier in many parts of the world. And while technology can deliver content efficiently, it cannot fully replace the social interaction and hands-on experiences that traditional classrooms provide. Looking ahead, the future of education likely lies in blended learning, combining the best of both online and in-person instruction. As technology continues to improve, online learning will become more interactive, more personalized, and more accessible to learners everywhere.",
      questions: [
        { q: "What accelerated the growth of online learning according to the passage?", opts: ["The invention of smartphones.", "Global events that forced remote instruction.", "The decline of universities.", "Cheaper textbooks."], a: 1 },
        { q: "Who benefits especially from the flexibility of online learning?", opts: ["Young children.", "Working adults advancing their careers.", "Retired people.", "Teachers."], a: 1 },
        { q: "What challenge does online learning present to students?", opts: ["Too much social interaction.", "The need for strong self-discipline.", "Courses are more expensive.", "There are too many courses to choose from."], a: 1 },
        { q: "What does the passage suggest is the future of education?", opts: ["Completely online learning.", "Blended learning combining online and in-person instruction.", "A return to traditional classrooms only.", "Learning through video games."], a: 1 }
      ]
    },
    {
      id: "lp4", title: "短文理解 4：运动与大脑健康",
      text: "Most people know that exercise is good for the body, but fewer realize how profoundly it affects the brain. Research over the past two decades has shown that regular physical activity is one of the most effective ways to improve cognitive function and protect the brain from age-related decline. When we exercise, our heart rate increases, pumping more oxygen and nutrients to the brain. This not only feeds brain cells but also stimulates the production of chemicals called growth factors. These growth factors help create new connections between brain cells and even generate new brain cells in a process known as neurogenesis. Studies have found that people who exercise regularly have better memory, sharper attention, and faster problem-solving skills compared to sedentary individuals. Exercise has also been shown to reduce symptoms of depression and anxiety, often working as effectively as medication for mild to moderate cases. The benefits start early. Children who are physically active tend to perform better academically and have fewer behavioral problems. For older adults, regular exercise can significantly reduce the risk of developing dementia and Alzheimer's disease. You don't need to run marathons to get these benefits. Even moderate activities like brisk walking, swimming, or dancing for 30 minutes a day, three times a week, can make a noticeable difference. The key is consistency. Making exercise a regular habit is one of the best investments you can make in your brain health, both now and in the future.",
      questions: [
        { q: "What happens in the brain when we exercise?", opts: ["Brain cells shrink temporarily.", "More oxygen and growth factors stimulate new connections and cells.", "The brain uses less energy.", "Memory is temporarily reduced."], a: 1 },
        { q: "What mental health benefit of exercise is mentioned?", opts: ["It cures all mental illnesses.", "It reduces symptoms of depression and anxiety.", "It makes people more competitive.", "It eliminates the need for sleep."], a: 1 },
        { q: "How much exercise does the passage recommend for brain benefits?", opts: ["Marathon training every month.", "30 minutes of moderate activity, three times a week.", "Intense workouts every day.", "Exercise only benefits professional athletes."], a: 1 },
        { q: "What benefit does exercise have for older adults?", opts: ["It reverses all aging effects.", "It significantly reduces the risk of dementia.", "It improves eyesight.", "It increases height."], a: 1 }
      ]
    },
    {
      id: "lp5", title: "短文理解 5：中国茶文化",
      text: "Tea is deeply woven into the fabric of Chinese culture, with a history stretching back thousands of years. According to legend, tea was discovered by Emperor Shennong around 2700 BCE when a tea leaf accidentally fell into his boiling water. Whether the legend is true or not, archaeological evidence confirms that tea has been consumed in China for at least two thousand years. Over time, tea evolved from a medicinal drink into an essential part of daily life and a sophisticated art form. Chinese tea culture encompasses far more than just the beverage itself. It includes the cultivation and processing of tea leaves, the art of brewing tea properly, and the etiquette of serving and drinking tea. Different regions of China are known for different types of tea. Green tea, the oldest and most natural type, is especially popular in the south. Oolong tea, which is partially fermented, is famous in Fujian and Taiwan. Black tea, fully fermented, is produced mainly in Yunnan and Fujian. And then there is pu-erh tea from Yunnan, which can be aged for years like fine wine. The traditional Chinese tea ceremony emphasizes harmony, respect, purity, and tranquility. It is a meditative practice that encourages people to slow down and appreciate the present moment. Tea also plays an important role in social gatherings, business meetings, and family celebrations. Today, as Chinese culture spreads around the world, so does its tea culture. Tea houses can be found in major cities from New York to London, and more and more people are discovering the rich flavors and deep history of Chinese tea.",
      questions: [
        { q: "According to legend, who discovered tea?", opts: ["Confucius.", "Emperor Shennong.", "A Buddhist monk.", "A tea farmer."], a: 1 },
        { q: "What type of tea is the oldest and most natural?", opts: ["Black tea.", "Green tea.", "Oolong tea.", "Pu-erh tea."], a: 1 },
        { q: "Where does pu-erh tea come from?", opts: ["Fujian province.", "Zhejiang province.", "Yunnan province.", "Taiwan."], a: 2 },
        { q: "What values does the traditional Chinese tea ceremony emphasize?", opts: ["Speed and efficiency.", "Harmony, respect, purity, and tranquility.", "Competition and skill.", "Wealth and status."], a: 1 }
      ]
    },
    {
      id: "lp6", title: "短文理解 6：人口老龄化",
      text: "Population aging is one of the most significant social transformations of the 21st century. Thanks to advances in medicine, better nutrition, and lower birth rates, people are living longer and the proportion of older adults in the population is rising rapidly. This demographic shift presents both challenges and opportunities for societies around the world. On the challenge side, an aging population puts pressure on healthcare systems and pension programs. With fewer working-age people supporting more retirees, governments face difficult decisions about how to fund social security and healthcare. Older adults also have different healthcare needs, requiring more long-term care and treatment for chronic conditions. There is also the risk of labor shortages as fewer young people enter the workforce. However, population aging also brings opportunities. Older people today are healthier and more active than previous generations. Many continue to work past the traditional retirement age, either out of choice or necessity, contributing their skills and experience to the economy. The so-called silver economy, which includes products and services for older consumers, is a rapidly growing market. From healthcare technology to senior housing and travel, businesses are finding new ways to serve this demographic. Many countries are adapting to this new reality by raising the retirement age, encouraging older workers to stay in the workforce, and investing in age-friendly infrastructure. Communities are designing more accessible public spaces and transportation systems. The key is to view aging not as a problem to be solved, but as a natural part of human life that can be embraced with thoughtful planning and innovation.",
      questions: [
        { q: "What is causing population aging according to the passage?", opts: ["Higher birth rates.", "Advances in medicine, better nutrition, and lower birth rates.", "More immigration.", "Economic growth."], a: 1 },
        { q: "What challenge does an aging population present?", opts: ["Too many young people.", "Pressure on healthcare and pension systems.", "Housing shortages.", "Too many jobs available."], a: 1 },
        { q: "What is the silver economy?", opts: ["An economy based on silver mining.", "Products and services for older consumers.", "A declining economy.", "An economy run by older politicians."], a: 1 },
        { q: "How are many countries adapting to population aging?", opts: ["By encouraging more immigration only.", "By raising retirement age and investing in age-friendly infrastructure.", "By closing pension programs.", "By forcing older people to retire earlier."], a: 1 }
      ]
    },
    {
      id: "lp7", title: "短文理解 7：压力管理",
      text: "In today's fast-paced world, stress has become an almost universal experience. While a certain amount of stress can be motivating and even beneficial, chronic stress can have serious effects on both physical and mental health. Learning to manage stress effectively is therefore an essential life skill. Stress triggers a natural physiological response in the body known as the fight-or-flight response. When we perceive a threat, our bodies release hormones like cortisol and adrenaline, which increase heart rate, blood pressure, and alertness. This response was designed to help our ancestors survive physical dangers, but in modern life, stress often comes from psychological sources like work deadlines, financial worries, and relationship problems. When stress becomes constant, it can contribute to a wide range of health issues, including heart disease, sleep disorders, depression, and weakened immune function. The good news is that there are many effective strategies for managing stress. Physical activity is one of the most powerful tools, as exercise releases endorphins, the body's natural mood boosters, and reduces stress hormones. Relaxation techniques such as deep breathing, meditation, and yoga can also calm the mind and body. Social support is another important factor. Talking to friends or family about your problems can provide emotional relief and practical perspective. Time management and setting realistic goals can also reduce feelings of being overwhelmed. Finally, taking care of basic needs such as getting enough sleep, eating well, and making time for hobbies and activities you enjoy can build resilience against stress. Everyone experiences stress differently, so it is important to find the strategies that work best for you and make them a regular part of your life.",
      questions: [
        { q: "What is the fight-or-flight response?", opts: ["A mental disorder.", "A natural physiological reaction to perceived threats.", "A type of exercise.", "A sleep disorder."], a: 1 },
        { q: "What health issue can chronic stress contribute to?", opts: ["Better memory.", "Heart disease and weakened immune function.", "Improved digestion.", "Increased bone density."], a: 1 },
        { q: "How does exercise help with stress?", opts: ["It increases cortisol levels.", "It releases endorphins and reduces stress hormones.", "It makes you tired so you forget your problems.", "It gives you more work to do."], a: 1 },
        { q: "What does the passage say about stress management strategies?", opts: ["Medication is the only solution.", "Everyone should use the same strategies.", "Different strategies work for different people.", "Stress cannot be managed."], a: 2 }
      ]
    },
    {
      id: "lp8", title: "短文理解 8：电商的崛起",
      text: "E-commerce, or electronic commerce, has revolutionized the way people shop and do business. What started as a novelty in the 1990s has grown into a multi-trillion-dollar global industry that touches nearly every sector of the economy. The rise of e-commerce has been driven by several factors. The widespread adoption of the Internet and smartphones has made online shopping accessible to billions of people around the world. Secure payment systems and improved logistics have made it easier and more convenient to order products online and have them delivered to your doorstep. Platforms like Amazon, Alibaba, and JD.com have transformed the retail landscape, offering consumers an enormous selection of products at competitive prices. One of the biggest advantages of e-commerce is convenience. Shoppers can browse and buy products at any time of day, from anywhere, without leaving their homes. Online reviews and price comparison tools help consumers make more informed decisions. For businesses, e-commerce opens up access to global markets and reduces the need for expensive physical storefronts. However, e-commerce has also brought challenges. Traditional brick-and-mortar retailers have struggled to compete, leading to store closures and job losses in some areas. The growth of online shopping has also increased packaging waste and carbon emissions from delivery vehicles. And while online marketplaces offer convenience, they also raise concerns about counterfeit products and data privacy. Despite these challenges, e-commerce continues to grow and evolve. New technologies like virtual reality shopping, artificial intelligence recommendations, and drone delivery promise to make online shopping even more personalized and efficient in the years to come.",
      questions: [
        { q: "What factor has driven the growth of e-commerce?", opts: ["Declining Internet usage.", "Widespread adoption of the Internet and smartphones.", "Fewer products available in stores.", "Government bans on physical stores."], a: 1 },
        { q: "What is one of the biggest advantages of e-commerce mentioned?", opts: ["Better quality products.", "Convenience of shopping anytime, anywhere.", "Lower prices always.", "Fewer packaging materials."], a: 1 },
        { q: "What challenge does e-commerce pose to traditional retailers?", opts: ["Too many customers.", "Struggling to compete, leading to store closures.", "Higher rent costs.", "Increased foot traffic."], a: 1 },
        { q: "What new technology is mentioned as the future of e-commerce?", opts: ["Fax machines.", "Virtual reality shopping and drone delivery.", "Television shopping channels.", "Mail-order catalogs."], a: 1 }
      ]
    },
    {
      id: "lp9", title: "短文理解 9：气候变化与自然",
      text: "Climate change is one of the most pressing issues facing our planet today, and its effects on the natural world are already visible and profound. Rising temperatures, changing rainfall patterns, and more extreme weather events are disrupting ecosystems and forcing species to adapt or face extinction. One of the most striking impacts is on animal migration patterns. Many species of birds, fish, and mammals migrate in response to seasonal changes in temperature and food availability. As the climate warms, these patterns are shifting. Some birds are arriving at their breeding grounds earlier, while others are moving their ranges further north to find cooler temperatures. If migration timing no longer matches the availability of food sources, it can have cascading effects throughout the ecosystem. Ocean ecosystems are also under threat. As the ocean absorbs more carbon dioxide from the atmosphere, it becomes more acidic, a process known as ocean acidification. This makes it harder for shell-forming organisms like corals, oysters, and plankton to build their shells and skeletons. Since these organisms form the base of the marine food chain, their decline affects everything from small fish to large whales. Coral reefs, which support a quarter of all marine species, are particularly vulnerable. Rising water temperatures cause coral bleaching, and if the stress continues, the corals die. The loss of coral reefs not only threatens marine biodiversity but also the millions of people who depend on them for food and coastal protection. While the situation is serious, it is not hopeless. Reducing greenhouse gas emissions, protecting natural habitats, and creating wildlife corridors can help species adapt and survive. Individual actions, from reducing carbon footprints to supporting conservation efforts, also play a part. The natural world has shown remarkable resilience, but it needs our help to face the unprecedented challenges of climate change.",
      questions: [
        { q: "How does climate change affect animal migration?", opts: ["Animals stop migrating entirely.", "Migration patterns shift as temperatures warm.", "Migration becomes easier.", "Species migrate shorter distances."], a: 1 },
        { q: "What is ocean acidification caused by?", opts: ["Oil spills.", "The ocean absorbing more carbon dioxide.", "Overfishing.", "Plastic pollution."], a: 1 },
        { q: "What percentage of marine species do coral reefs support?", opts: ["About 5 percent.", "About 10 percent.", "About 25 percent.", "About 50 percent."], a: 2 },
        { q: "What solution does the passage mention for helping species adapt?", opts: ["Building more zoos.", "Protecting habitats and creating wildlife corridors.", "Moving all species to Antarctica.", "Feeding wild animals."], a: 1 }
      ]
    },
    {
      id: "lp10", title: "短文理解 10：丝绸之路的历史影响",
      text: "The Silk Road was one of the most important trade routes in human history, connecting East and West for over two thousand years. Stretching from China in the east to the Mediterranean Sea in the west, this network of land and sea routes facilitated not only the exchange of goods but also the spread of ideas, technologies, religions, and cultures. Named after the lucrative Chinese silk trade, the Silk Road carried much more than just silk. Spices, precious metals, porcelain, and glass traveled along these routes, as did horses, fruits, and other agricultural products. But perhaps even more significant than the commercial exchange was the cultural and intellectual exchange that took place. Buddhism spread from India to China and beyond via the Silk Road, carried by traveling monks and merchants. Technologies like paper-making, printing, and the compass moved from China to the West, while mathematics and astronomy knowledge traveled in the opposite direction. The Silk Road was also a channel for the spread of diseases, including the bubonic plague, which devastated populations across continents in the 14th century. The peak of the Silk Road was during the Tang Dynasty in China, when the city of Chang'an, now Xi'an, was one of the wealthiest and most cosmopolitan cities in the world. Merchants, diplomats, and travelers from all over the known world visited the city, bringing with them new customs, languages, and religions. Although the traditional Silk Road declined with the rise of sea trade routes, its legacy continues to shape the world today. It demonstrated the power of connection and exchange between different civilizations. In recent years, the concept of the Silk Road has been revived through initiatives aimed at strengthening economic and cultural ties between Asia, Europe, and Africa, proving that the spirit of the ancient trade route is still very much alive.",
      questions: [
        { q: "What did the Silk Road connect?", opts: ["North and South America.", "East and West, from China to the Mediterranean.", "Australia and Asia.", "Europe and Africa only."], a: 1 },
        { q: "What religion spread from India to China via the Silk Road?", opts: ["Christianity.", "Buddhism.", "Islam.", "Hinduism."], a: 1 },
        { q: "When was the peak of the Silk Road?", opts: ["During the Roman Empire.", "During the Tang Dynasty.", "During the Ming Dynasty.", "During the Industrial Revolution."], a: 1 },
        { q: "Why did the traditional Silk Road decline?", opts: ["It was destroyed by war.", "The rise of sea trade routes.", "Silk became too expensive.", "Nobody wanted to travel anymore."], a: 1 }
      ]
    }
  ];

  window.CET6_LISTENING.shortConvs = window.CET6_LISTENING.shortConvs.concat(extShort);
  window.CET6_LISTENING.longConvs = window.CET6_LISTENING.longConvs.concat(extLong);
  window.CET6_LISTENING.passages = window.CET6_LISTENING.passages.concat(extPassages);
})();
