/* 六级翻译扩展素材包 2 —— 补充真题风格翻译练习
 * 来源：六级真题改编，2016-2026年热点话题
 */
(function () {
  if (!window.CET6_PASSAGES) return;

  var ext = [
    {
      id: "p24", title: "书法", cat: "文化", year: "模拟",
      source: "书法是中国特有的一种传统艺术，有着三千多年的悠久历史。书法以毛笔、墨、纸、砚为工具，通过汉字的书写来表达书法家的情感和审美追求。中国书法主要有篆书、隶书、楷书、行书和草书五种书体。书法不仅是一种书写技巧，更是一种修身养性的方式。历代著名书法家留下了大量珍贵作品，成为中华文化的宝贵财富。如今，书法已成为中华文化的重要象征，吸引着越来越多的外国人学习和欣赏。",
      reference: "Calligraphy is a unique traditional Chinese art with a long history of more than 3,000 years. Using the writing brush, ink, paper and inkstone as tools, calligraphy expresses the calligrapher's emotions and aesthetic pursuit through the writing of Chinese characters. Chinese calligraphy mainly has five styles: seal script, clerical script, regular script, running script and cursive script. Calligraphy is not only a writing skill but also a way of cultivating one's character. Famous calligraphers throughout history have left behind a great number of precious works, which have become valuable treasures of Chinese culture. Nowadays, calligraphy has become an important symbol of Chinese culture, attracting more and more foreigners to learn and appreciate it.",
      points: ["书法 calligraphy", "传统艺术 traditional art", "文房四宝 the four treasures of the study (brush, ink, paper, inkstone)", "书体 script/style", "楷书 regular script", "草书 cursive script", "修身养性 cultivate one's character", "重要象征 important symbol"]
    },
    {
      id: "p25", title: "剪纸", cat: "文化", year: "模拟",
      source: "剪纸是中国最古老的民间艺术之一，至今已有两千多年的历史。剪纸通常用剪刀或刻刀在纸上剪刻出各种图案，如花鸟、人物、吉祥图案等。每逢春节或喜庆日子，人们会在窗户上贴上红色的剪纸，增添节日气氛。剪纸艺术在中国各地广泛流行，不同地区形成了各自独特的风格。2009年，中国剪纸被列入联合国教科文组织人类非物质文化遗产代表作名录。",
      reference: "Paper cutting is one of the oldest folk arts in China, with a history of more than 2,000 years. Paper cutting usually uses scissors or engraving knives to cut various patterns on paper, such as flowers and birds, figures, and auspicious patterns. During the Spring Festival or festive occasions, people paste red paper cuttings on windows to enhance the festive atmosphere. The art of paper cutting is widely popular across China, and different regions have developed their own unique styles. In 2009, Chinese paper cutting was included in the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.",
      points: ["剪纸 paper cutting", "民间艺术 folk art", "刻刀 engraving knife", "吉祥图案 auspicious patterns", "增添节日气氛 enhance the festive atmosphere", "独特的风格 unique style", "非物质文化遗产 intangible cultural heritage", "联合国教科文组织 UNESCO"]
    },
    {
      id: "p26", title: "京剧", cat: "文化", year: "模拟",
      source: "京剧是中国的国粹，已有两百多年的历史。京剧融合了唱、念、做、打等多种艺术形式，是中国影响力最大的戏曲剧种。京剧的角色主要分为生、旦、净、丑四大行当，每个行当都有独特的脸谱和服饰。京剧的伴奏乐器包括京胡、二胡、月琴等，其唱腔优美动听。京剧不仅在中国广受欢迎，也逐渐走向世界，成为传播中华文化的重要桥梁。2010年，京剧被列入人类非物质文化遗产代表作名录。",
      reference: "Peking Opera is the quintessence of Chinese culture, with a history of more than 200 years. Peking Opera integrates various art forms such as singing, recitation, acting and acrobatics, and is the most influential opera genre in China. The roles in Peking Opera are mainly divided into four categories: Sheng (male role), Dan (female role), Jing (painted face role) and Chou (clown role), each with unique facial makeup and costumes. The accompanying instruments of Peking Opera include the Jinghu fiddle, Erhu and Yueqin, and its vocal melodies are graceful and melodious. Peking Opera is not only widely popular in China but has also gradually gone global, becoming an important bridge for spreading Chinese culture. In 2010, Peking Opera was included in the Representative List of the Intangible Cultural Heritage of Humanity.",
      points: ["京剧 Peking Opera", "国粹 the quintessence of Chinese culture", "唱念做打 singing, recitation, acting and acrobatics", "戏曲剧种 opera genre", "行当 role type/category", "脸谱 facial makeup", "走向世界 go global", "传播 spread"]
    },
    {
      id: "p27", title: "长城", cat: "文化", year: "模拟",
      source: "长城是中国古代的军事防御工程，也是世界上最伟大的建筑奇迹之一。长城始建于春秋战国时期，秦始皇统一中国后将各国长城连接起来。现存的长城主要是明代修建的，总长度超过两万多公里。长城蜿蜒起伏，穿越群山、沙漠和草原，气势雄伟壮观。1987年，长城被联合国教科文组织列入世界文化遗产名录，每年吸引着数百万中外游客前来参观。",
      reference: "The Great Wall is an ancient Chinese military defense project and one of the greatest architectural wonders in the world. The Great Wall was first built during the Spring and Autumn Period and the Warring States Period. After Emperor Qin Shi Huang unified China, he connected the walls built by different states. The existing Great Wall was mainly built during the Ming Dynasty, with a total length of more than 20,000 kilometers. The Great Wall winds its way through mountains, deserts and grasslands, presenting a magnificent and spectacular sight. In 1987, the Great Wall was listed as a World Cultural Heritage Site by UNESCO, attracting millions of Chinese and foreign tourists every year.",
      points: ["长城 the Great Wall", "军事防御工程 military defense project", "建筑奇迹 architectural wonder", "春秋战国时期 the Spring and Autumn Period and the Warring States Period", "统一 unify", "明代 the Ming Dynasty", "蜿蜒起伏 wind its way", "世界文化遗产 World Cultural Heritage Site"]
    },
    {
      id: "p28", title: "故宫", cat: "文化", year: "模拟",
      source: "故宫又称紫禁城，是中国明清两代的皇家宫殿，位于北京的市中心。故宫始建于1406年，历时十四年建成，共有九千多间房屋。故宫是世界上现存规模最大、保存最完整的木质结构古建筑群。故宫收藏了大量珍贵的文物，是研究中国古代历史和文化的重要宝库。如今，故宫已成为世界著名的旅游胜地，1987年被列入世界文化遗产名录。",
      reference: "The Forbidden City, also known as the Purple Forbidden City, was the imperial palace of the Ming and Qing dynasties in China, located in the center of Beijing. Construction of the Forbidden City began in 1406 and took fourteen years to complete, with more than 9,000 rooms. The Forbidden City is the largest and best-preserved ancient wooden architectural complex in the world. It houses a large number of precious cultural relics and is an important treasure house for the study of ancient Chinese history and culture. Today, the Forbidden City has become a world-famous tourist attraction and was listed as a World Cultural Heritage Site in 1987.",
      points: ["故宫/紫禁城 the Forbidden City", "皇家宫殿 imperial palace", "明清两代 the Ming and Qing dynasties", "木质结构 wooden structure", "古建筑群 ancient architectural complex", "珍贵文物 precious cultural relics", "宝库 treasure house", "旅游胜地 tourist attraction"]
    },
    {
      id: "p29", title: "中国菜", cat: "文化", year: "模拟",
      source: "中国菜是世界上最丰富多样的菜系之一，有着悠久的历史和深厚的文化底蕴。中国地域辽阔，各地气候、物产和风俗习惯不同，形成了各具特色的地方菜系。其中，鲁菜、川菜、粤菜、苏菜、闽菜、浙菜、湘菜和徽菜被称为中国八大菜系。中国菜讲究色、香、味、形俱全，不仅是一种饮食方式，更是一种文化艺术。如今，中国菜已传播到世界各地，深受各国人民的喜爱。",
      reference: "Chinese cuisine is one of the most diverse cuisines in the world, with a long history and profound cultural heritage. Due to China's vast territory and differences in climate, local products and customs across regions, various local cuisines with distinctive characteristics have been formed. Among them, Shandong, Sichuan, Guangdong, Jiangsu, Fujian, Zhejiang, Hunan and Anhui cuisines are known as the eight major Chinese cuisines. Chinese cuisine emphasizes the perfect combination of color, aroma, taste and appearance, and is not only a way of eating but also a cultural art. Today, Chinese cuisine has spread around the world and is deeply loved by people of all countries.",
      points: ["中国菜 Chinese cuisine", "文化底蕴 cultural heritage/deposit", "地方菜系 local cuisine", "八大菜系 eight major cuisines", "色、香、味、形 color, aroma, taste and appearance", "饮食方式 way of eating/diet", "传播 spread", "深受喜爱 be deeply loved by"]
    },
    {
      id: "p30", title: "汉服", cat: "文化", year: "模拟",
      source: "汉服是中国汉族的传统服饰，有着四千多年的历史。汉服的基本特点是交领右衽、宽袍大袖，以腰带系结。汉服不仅是一种服装，更是华夏礼仪文化的重要组成部分，体现了中国人的审美观念和哲学思想。近年来，随着传统文化的复兴，越来越多的年轻人开始喜欢并穿着汉服。汉服爱好者会在传统节日或文化活动中身着汉服，展现中华传统文化的魅力。",
      reference: "Hanfu is the traditional clothing of the Han ethnic group in China, with a history of more than 4,000 years. The basic characteristics of Hanfu are cross-collar with right lapel, wide robes and large sleeves, fastened with a belt. Hanfu is not only a type of clothing but also an important part of Chinese ritual culture, reflecting the aesthetic concepts and philosophical thoughts of the Chinese people. In recent years, with the revival of traditional culture, more and more young people have begun to like and wear Hanfu. Hanfu enthusiasts wear Hanfu during traditional festivals or cultural activities to showcase the charm of traditional Chinese culture.",
      points: ["汉服 Hanfu", "传统服饰 traditional clothing", "汉族 Han ethnic group", "交领右衽 cross-collar with right lapel", "宽袍大袖 wide robes and large sleeves", "礼仪文化 ritual culture", "审美观念 aesthetic concepts", "传统文化的复兴 revival of traditional culture"]
    },
    {
      id: "p31", title: "中国老龄化", cat: "社会", year: "模拟",
      source: "中国正面临着人口老龄化的严峻挑战。根据统计，中国60岁以上老年人口已超过两亿八千万，占总人口的近百分之二十。人口老龄化给社会保障、医疗保健和养老服务体系带来了巨大压力。为应对这一挑战，中国政府采取了一系列措施，包括完善养老保险制度、发展养老服务业、推进健康中国建设等。同时，全社会也在积极倡导尊老敬老的传统美德。",
      reference: "China is facing the severe challenge of population aging. According to statistics, the number of elderly people aged 60 and above in China has exceeded 280 million, accounting for nearly 20 percent of the total population. Population aging has brought tremendous pressure on social security, healthcare and the elderly care service system. To address this challenge, the Chinese government has taken a series of measures, including improving the pension insurance system, developing the elderly care service industry, and advancing the building of a Healthy China. Meanwhile, the whole society is also actively advocating the traditional virtue of respecting and caring for the elderly.",
      points: ["人口老龄化 population aging", "严峻挑战 severe challenge", "占 account for/make up", "社会保障 social security", "医疗保健 healthcare/medical care", "养老服务 elderly care service", "养老保险制度 pension insurance system", "尊老敬老 respect and care for the elderly"]
    },
    {
      id: "p32", title: "5G技术", cat: "科技", year: "模拟",
      source: "第五代移动通信技术简称5G，是最新一代蜂窝移动通信技术。与4G相比，5G具有更高的速率、更低的时延和更大的连接容量。5G技术的应用将深刻改变人们的生活方式，推动智慧城市、远程医疗、自动驾驶、工业互联网等领域的发展。中国在5G技术研发和应用方面走在世界前列，已建成全球规模最大的5G网络。5G的普及将为数字经济的发展提供强大动力。",
      reference: "The fifth-generation mobile communication technology, abbreviated as 5G, is the latest generation of cellular mobile communication technology. Compared with 4G, 5G features higher speed, lower latency and larger connection capacity. The application of 5G technology will profoundly change people's lifestyles and promote the development of smart cities, telemedicine, autonomous driving, the industrial internet and other fields. China is at the forefront of the world in 5G technology research, development and application, and has built the world's largest 5G network. The popularization of 5G will provide strong momentum for the development of the digital economy.",
      points: ["第五代移动通信技术 5G/fifth-generation mobile communication technology", "蜂窝移动通信 cellular mobile communication", "速率 speed/rate", "时延 latency/delay", "连接容量 connection capacity", "智慧城市 smart city", "远程医疗 telemedicine", "工业互联网 industrial internet"]
    },
    {
      id: "p33", title: "在线教育", cat: "教育", year: "模拟",
      source: "近年来，在线教育在中国发展迅速，成为教育领域的重要组成部分。在线教育借助互联网技术，打破了时间和空间的限制，使学习者可以随时随地进行学习。在线教育的形式丰富多样，包括直播课程、录播课程、在线辅导等。疫情期间，在线教育发挥了重要作用，保障了学生的学习不中断。然而，在线教育也面临着教学质量参差不齐、学生自律性不足等问题，需要不断完善和规范。",
      reference: "In recent years, online education has developed rapidly in China and become an important part of the education sector. With the help of internet technology, online education has broken the limitations of time and space, enabling learners to study anytime and anywhere. Online education takes various forms, including live courses, recorded courses, and online tutoring. During the pandemic, online education played an important role in ensuring that students' learning was not interrupted. However, online education also faces problems such as uneven teaching quality and insufficient self-discipline among students, which require continuous improvement and standardization.",
      points: ["在线教育 online education", "互联网技术 internet technology", "打破限制 break limitations", "直播课程 live courses", "录播课程 recorded courses", "在线辅导 online tutoring", "教学质量 teaching quality", "自律性 self-discipline"]
    },
    {
      id: "p34", title: "共享单车", cat: "社会", year: "模拟",
      source: "共享单车是共享经济的典型代表，近年来在中国各大城市迅速普及。用户只需用手机扫描二维码，即可解锁并骑行一辆自行车，使用结束后停放在指定区域即可。共享单车为人们的出行提供了便捷、环保的选择，有效解决了城市出行\"最后一公里\"的问题。然而，共享单车的快速发展也带来了乱停乱放、车辆损坏和资源浪费等问题，需要政府和企业共同加强管理。",
      reference: "Shared bicycles are a typical representative of the sharing economy and have rapidly gained popularity in major Chinese cities in recent years. Users simply scan a QR code with their phone to unlock and ride a bicycle, and park it in a designated area after use. Shared bicycles provide people with a convenient and environmentally friendly travel option, effectively solving the \"last mile\" problem of urban transportation. However, the rapid development of shared bicycles has also brought problems such as random parking, vehicle damage and resource waste, which require the joint efforts of the government and enterprises to strengthen management.",
      points: ["共享单车 shared bicycles", "共享经济 sharing economy", "迅速普及 rapidly gain popularity", "扫描二维码 scan a QR code", "解锁 unlock", "指定区域 designated area", "最后一公里 last mile", "乱停乱放 random parking/disorderly parking"]
    },
    {
      id: "p35", title: "中国制造", cat: "经济", year: "模拟",
      source: "中国制造是指在中华人民共和国境内生产的产品。过去几十年，中国制造凭借成本优势和完整的产业链，成为全球制造业的重要组成部分，中国也因此被誉为\"世界工厂\"。近年来，中国制造业正从低端制造向高端制造转型升级，越来越多的中国品牌走向世界。从高铁到新能源汽车，从5G设备到航天技术，中国制造的品质和创新能力不断提升，在全球市场的竞争力日益增强。",
      reference: "Made in China refers to products manufactured within the territory of the People's Republic of China. Over the past few decades, Made in China, with its cost advantages and complete industrial chain, has become an important part of the global manufacturing industry, earning China the reputation of the \"world factory\". In recent years, China's manufacturing industry has been transforming and upgrading from low-end to high-end manufacturing, with more and more Chinese brands going global. From high-speed rail to new energy vehicles, from 5G equipment to space technology, the quality and innovation capability of Made in China are constantly improving, and its competitiveness in the global market is increasingly enhanced.",
      points: ["中国制造 Made in China", "成本优势 cost advantage", "产业链 industrial chain", "世界工厂 world factory", "转型升级 transformation and upgrading", "高端制造 high-end manufacturing", "走向世界 go global", "竞争力 competitiveness"]
    },
    {
      id: "p36", title: "双碳目标", cat: "环境", year: "模拟",
      source: "双碳目标是指中国提出的碳达峰和碳中和目标。中国承诺在2030年前实现碳达峰，力争在2060年前实现碳中和。实现双碳目标对于应对全球气候变化、推动绿色发展具有重要意义。为实现这一目标，中国正大力发展可再生能源，推进产业结构调整，提高能源利用效率，并倡导低碳生活方式。双碳目标不仅是中国对国际社会的庄严承诺，也是中国实现高质量发展的内在要求。",
      reference: "Dual carbon goals refer to the carbon peak and carbon neutrality goals proposed by China. China has pledged to achieve carbon peak before 2030 and strive to achieve carbon neutrality before 2060. Achieving the dual carbon goals is of great significance for addressing global climate change and promoting green development. To achieve this goal, China is vigorously developing renewable energy, advancing industrial restructuring, improving energy efficiency, and advocating a low-carbon lifestyle. The dual carbon goals are not only China's solemn commitment to the international community but also an inherent requirement for China to achieve high-quality development.",
      points: ["双碳目标 dual carbon goals", "碳达峰 carbon peak", "碳中和 carbon neutrality", "应对气候变化 address climate change", "绿色发展 green development", "可再生能源 renewable energy", "能源利用效率 energy utilization efficiency", "低碳生活方式 low-carbon lifestyle"]
    },
    {
      id: "p37", title: "乡村旅游", cat: "经济", year: "模拟",
      source: "乡村旅游是以乡村自然风光和民俗文化为特色的旅游形式。近年来，随着生活水平的提高和生活节奏的加快，越来越多的城市居民选择到乡村度假，享受田园风光和宁静生活。乡村旅游不仅丰富了旅游产品供给，也为农村地区带来了经济收入和就业机会，助力乡村振兴战略的实施。中国各地因地制宜，发展出了农家乐、民宿、采摘游等多种乡村旅游模式，深受游客欢迎。",
      reference: "Rural tourism is a form of tourism featuring rural natural scenery and folk culture. In recent years, with the improvement of living standards and the acceleration of the pace of life, more and more urban residents choose to spend their holidays in the countryside, enjoying the pastoral scenery and peaceful life. Rural tourism not only enriches the supply of tourism products but also brings economic income and employment opportunities to rural areas, helping to implement the rural revitalization strategy. Adapting to local conditions, various regions in China have developed multiple rural tourism models such as farm stays, homestays and fruit-picking tours, which are deeply welcomed by tourists.",
      points: ["乡村旅游 rural tourism", "民俗文化 folk culture", "生活水平 living standards", "田园风光 pastoral scenery/rural scenery", "就业机会 employment opportunities", "乡村振兴 rural revitalization", "因地制宜 adapt to local conditions", "民宿 homestay"]
    },
    {
      id: "p38", title: "数字化生活", cat: "科技", year: "模拟",
      source: "数字化生活是指人们利用数字技术进行日常活动的生活方式。如今，数字化已经深度融入中国人的日常生活，从移动支付、网上购物、在线办公到数字政务，几乎涵盖了生活的方方面面。智能手机的普及和移动互联网的发展是数字化生活的重要基础。数字化生活给人们带来了极大的便利，提高了工作和生活效率。然而，数字鸿沟和个人信息安全等问题也需要引起重视和解决。",
      reference: "Digital life refers to the lifestyle in which people use digital technology for daily activities. Nowadays, digitalization has been deeply integrated into the daily life of Chinese people, covering almost all aspects of life from mobile payment, online shopping and telecommuting to digital government services. The popularization of smartphones and the development of the mobile internet are important foundations of digital life. Digital life has brought great convenience to people and improved work and life efficiency. However, issues such as the digital divide and personal information security also need to be taken seriously and addressed.",
      points: ["数字化生活 digital life", "数字技术 digital technology", "深度融入 be deeply integrated into", "移动支付 mobile payment", "在线办公 telecommuting/working online", "数字政务 digital government services", "数字鸿沟 digital divide", "个人信息安全 personal information security"]
    }
  ];

  for (var i = 0; i < ext.length; i++) {
    window.CET6_PASSAGES.push(ext[i]);
  }
})();
