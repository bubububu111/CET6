/* 六级翻译真题风格练习语料：中文原文 + 参考译文 + 关键表达 */
window.CET6_PASSAGES = [
  {
    id: "p1", title: "黄河", cat: "文化", year: "2017.6",
    source: "黄河是亚洲第三长的河流。黄河流经中国的九个省区，全长5464公里，最终流入渤海。黄河被誉为中华民族的“母亲河”。黄河流域是中华古代文明的发源地之一，为中国早期的农业发展做出了巨大贡献。如今，黄河流域丰富的历史遗迹吸引了大量游客和学者前来参观和研究。",
    reference: "The Yellow River is the third longest river in Asia. Flowing through nine provinces and regions of China, it covers a total length of 5,464 kilometers before emptying into the Bohai Sea. The Yellow River is honored as the \"Mother River\" of the Chinese nation. The Yellow River basin was one of the birthplaces of ancient Chinese civilization and made great contributions to China's early agricultural development. Today, the abundant historical relics in the Yellow River basin attract large numbers of tourists and scholars to visit and conduct research.",
    points: ["流经 flow through", "全长 cover a length of", "流入渤海 empty into the Bohai Sea", "被誉为 be honored/hailed as", "发源地 birthplace", "做出贡献 make contributions to", "历史遗迹 historical relics"]
  },
  {
    id: "p2", title: "长江", cat: "文化", year: "2017.6",
    source: "长江是中国最长的河流，也是亚洲最长的河流，全长约6300公里。长江发源于青藏高原，流经11个省级行政区，最后注入东海。长江流域人口众多，资源丰富，是中国重要的经济带。自古以来，长江在中国的经济和社会发展中扮演着重要角色。如今，长江三峡地区已成为世界着名的旅游胜地。",
    reference: "The Yangtze River is the longest river in China as well as in Asia, with a total length of about 6,300 kilometers. Originating in the Qinghai-Tibet Plateau, it flows through eleven provincial administrative regions and finally empties into the East China Sea. The Yangtze River basin, with a large population and abundant resources, is an important economic belt of China. Since ancient times, the Yangtze River has played a significant role in China's economic and social development. Today, the Three Gorges area along the river has become a world-famous tourist attraction.",
    points: ["发源于 originate in/from", "流经 flow through", "注入 empty into", "经济带 economic belt", "扮演重要角色 play a significant role in", "旅游胜地 tourist attraction"]
  },
  {
    id: "p3", title: "珠江三角洲", cat: "经济", year: "2021.6",
    source: "珠江三角洲是中国最发达的地区之一，面积约56000平方公里。过去四十年间，珠江三角洲经历了快速的经济增长，成为中国制造业和出口业的重要基地。该地区聚集了大量的高科技企业和人才，吸引了来自全国各地的劳动力。随着粤港澳大湾区建设的推进，珠江三角洲正迎来新的发展机遇。",
    reference: "The Pearl River Delta is one of the most developed regions in China, covering an area of about 56,000 square kilometers. Over the past four decades, the Pearl River Delta has experienced rapid economic growth and become an important base of China's manufacturing and export industries. The region has gathered a large number of high-tech enterprises and talents, attracting labor force from all over the country. With the advancement of the construction of the Guangdong-Hong Kong-Macao Greater Bay Area, the Pearl River Delta is embracing new development opportunities.",
    points: ["发达地区 developed region", "占地面积 cover an area of", "经历 experience/undergo", "制造业 manufacturing industry", "聚集 gather/cluster", "发展机遇 development opportunities"]
  },
  {
    id: "p4", title: "中国航天", cat: "科技", year: "模拟",
    source: "近年来，中国航天事业取得了举世瞩目的成就。从载人航天工程到月球探测，从北斗导航系统到火星探测任务，中国正稳步迈向航天强国。航天技术的发展不仅提升了中国的国际地位，也广泛应用于通信、气象预报和灾害监测等领域，为经济社会发展提供了有力支撑。",
    reference: "In recent years, China's space industry has achieved remarkable accomplishments. From the manned space program to lunar exploration, from the Beidou Navigation System to the Mars exploration mission, China is steadily moving toward becoming a space power. The development of space technology has not only enhanced China's international status but also been widely applied in fields such as communication, weather forecasting and disaster monitoring, providing strong support for economic and social development.",
    points: ["举世瞩目的成就 remarkable achievements", "载人航天 manned spaceflight", "月球探测 lunar exploration", "迈向 move toward", "国际地位 international status", "有力支撑 strong support"]
  },
  {
    id: "p5", title: "太极拳", cat: "文化", year: "2020.9",
    source: "太极拳是中国传统武术的一种，至今已有数百年的历史。太极拳动作缓慢柔和，讲究呼吸与动作的协调，适合各个年龄段的人练习。长期练习太极拳不仅能强身健体，还能修身养性、缓解压力。如今，太极拳已传播到世界各地，成为中国传统文化的一张名片。",
    reference: "Tai Chi, a form of traditional Chinese martial arts, has a history of several hundred years. With slow and gentle movements, Tai Chi emphasizes the coordination between breathing and movement, making it suitable for people of all ages to practice. Long-term practice of Tai Chi can not only build up one's body but also cultivate one's character and relieve stress. Nowadays, Tai Chi has spread around the world and become a symbol of traditional Chinese culture.",
    points: ["传统武术 traditional martial arts", "讲究 emphasize/stress", "呼吸与动作的协调 coordination of breathing and movement", "强身健体 build up one's body", "修身养性 cultivate one's character", "缓解压力 relieve stress", "名片 a symbol/ambassador of"]
  },
  {
    id: "p6", title: "移动支付", cat: "科技", year: "模拟",
    source: "随着智能手机的普及，移动支付在中国迅速发展。如今，无论是在大型商场还是街边小店，人们只需用手机扫描二维码即可完成付款。移动支付不仅方便快捷，还减少了现金交易带来的风险。据统计，中国移动支付的用户规模和使用频率均居世界前列。",
    reference: "With the popularization of smart phones, mobile payment has developed rapidly in China. Nowadays, whether in large shopping malls or small street stores, people can complete payment simply by scanning QR codes with their phones. Mobile payment is not only convenient and fast but also reduces the risks brought by cash transactions. According to statistics, China ranks among the top in the world in terms of both the scale of mobile payment users and the frequency of use.",
    points: ["移动支付 mobile payment", "普及 popularization", "扫描二维码 scan QR codes", "方便快捷 convenient and fast", "现金交易 cash transaction", "据……统计 according to statistics", "居世界前列 rank among the top in the world"]
  },
  {
    id: "p7", title: "高铁", cat: "科技", year: "模拟",
    source: "中国高铁发展迅速，运营里程已位居世界第一。高铁以其速度快、安全性高和乘坐舒适而深受欢迎，成为人们出行的首选。高铁网络的不断完善极大地缩短了城市之间的时空距离，促进了沿线地区的经济发展和人员往来。",
    reference: "China's high-speed railways have developed rapidly, with their operating mileage ranking first in the world. High-speed trains are deeply favored by people for their high speed, great safety and riding comfort, becoming the first choice for travel. The continuous improvement of the high-speed railway network has greatly shortened the time and space distance between cities and promoted the economic development and personnel exchanges of the regions along the lines.",
    points: ["运营里程 operating mileage", "位居世界第一 rank first in the world", "深受欢迎 be deeply favored by", "首选 first choice", "缩短时空距离 shorten the time and space distance", "沿线地区 regions along the lines", "人员往来 personnel exchanges"]
  },
  {
    id: "p8", title: "垃圾分类", cat: "社会", year: "模拟",
    source: "近年来，垃圾分类在中国许多城市逐步推行。垃圾分类不仅能减少环境污染，还能提高资源的回收利用率。然而，要养成分类投放的习惯并非易事，需要政府加强宣传教育，也需要每位市民的自觉参与。只有人人行动起来，城市环境才能得到根本改善。",
    reference: "In recent years, garbage sorting has been gradually carried out in many Chinese cities. Garbage sorting can not only reduce environmental pollution but also improve the recycling rate of resources. However, developing the habit of sorting garbage is by no means easy, which requires the government to strengthen publicity and education, as well as the conscious participation of every citizen. Only when everyone takes action can the urban environment be fundamentally improved.",
    points: ["垃圾分类 garbage sorting/classification", "逐步推行 be gradually carried out", "回收利用率 recycling rate", "并非易事 by no means easy", "宣传教育 publicity and education", "自觉参与 conscious participation", "根本改善 fundamentally improved"]
  },
  {
    id: "p9", title: "春节", cat: "文化", year: "模拟",
    source: "春节是中国最重要的传统节日，象征着团圆和新的开始。每逢春节，无论身在何处，人们都会设法回家与家人团聚。除夕之夜，全家人一起吃年夜饭、看春节晚会、守岁迎新。春节期间，人们还走亲访友，互致新春祝福。如今，春节的庆祝活动已传播到世界许多国家。",
    reference: "The Spring Festival is the most important traditional festival in China, symbolizing reunion and a new beginning. Whenever the Spring Festival comes, people will try their best to return home for a family reunion no matter where they are. On New Year's Eve, the whole family has the reunion dinner together, watches the Spring Festival Gala and stays up late to welcome the new year. During the festival, people also visit relatives and friends and exchange New Year greetings. Nowadays, the celebration of the Spring Festival has spread to many countries around the world.",
    points: ["象征 symbolize", "团圆 reunion", "团聚 get together / family reunion", "年夜饭 reunion dinner / New Year's Eve dinner", "守岁 stay up late on New Year's Eve", "走亲访友 visit relatives and friends", "互致祝福 exchange greetings/blessings"]
  },
  {
    id: "p10", title: "终身学习", cat: "教育", year: "模拟",
    source: "在知识快速更新的时代，终身学习已成为一种必然选择。随着人工智能等新技术的兴起，许多传统职业面临转型，职场人士必须不断学习新技能以适应变化。近年来，在线教育的兴起为人们提供了随时随地学习的可能，使终身学习变得更加便捷。",
    reference: "In an era of rapid knowledge renewal, lifelong learning has become an inevitable choice. With the rise of new technologies such as artificial intelligence, many traditional occupations are facing transformation, and professionals must constantly learn new skills to adapt to changes. In recent years, the rise of online education has made it possible for people to study anytime and anywhere, making lifelong learning more convenient.",
    points: ["知识更新 knowledge renewal", "终身学习 lifelong learning", "必然选择 inevitable choice", "兴起 the rise of", "面临转型 face transformation", "适应变化 adapt to changes", "随时随地 anytime and anywhere"]
  },
  {
    id: "p11", title: "高铁发展", cat: "科技", year: "模拟",
    source: "中国高铁在过去十年间取得了举世瞩目的发展。截至目前，中国高铁运营里程已超过四万公里，位居世界第一。高铁不仅缩短了城市之间的旅行时间，也促进了沿线地区的经济发展和旅游业繁荣。随着技术的不断进步，中国高铁正逐步走向世界，为更多国家提供交通解决方案。",
    reference: "China's high-speed rail has achieved remarkable development over the past decade. Up to now, the total operating mileage of China's high-speed rail has exceeded 40,000 kilometers, ranking first in the world. High-speed rail has not only shortened travel time between cities but also promoted economic development and tourism prosperity along the routes. With continuous technological progress, China's high-speed rail is gradually going global, providing transportation solutions for more countries.",
    points: ["举世瞩目 remarkable / world-renowned", "运营里程 operating mileage", "位居世界第一 rank first in the world", "缩短 shorten", "沿线地区 areas along the routes", "走向世界 go global", "交通解决方案 transportation solutions"]
  },
  {
    id: "p12", title: "茶文化", cat: "文化", year: "模拟",
    source: "中国是茶的故乡，茶文化在中国有着数千年的历史。中国人饮茶不仅是为了解渴，更是一种修身养性的方式。绿茶、红茶、乌龙茶等不同种类的茶叶各具特色。如今，茶文化已传播到世界各地，成为中外文化交流的重要纽带。",
    reference: "China is the birthplace of tea, and tea culture has a history of several thousand years in China. For Chinese people, drinking tea is not only for quenching thirst, but also a way of cultivating one's character. Different types of tea leaves such as green tea, black tea and oolong tea each have their own distinctive features. Nowadays, tea culture has spread to all parts of the world and become an important bond for cultural exchange between China and other countries.",
    points: ["故乡 birthplace", "数千年 several thousand years", "解渴 quench thirst", "修身养性 cultivate one's character", "各具特色 each has its own distinctive features", "纽带 bond", "文化交流 cultural exchange"]
  },
  {
    id: "p13", title: "数字经济", cat: "经济", year: "模拟",
    source: "近年来，数字经济已成为推动全球经济增长的重要引擎。在中国，电子商务、移动支付和共享经济等新业态蓬勃发展，深刻改变了人们的生活方式和消费习惯。数字经济的繁荣不仅创造了大量就业机会，也促进了传统产业的转型升级。然而，数据安全和隐私保护等问题也日益引起社会各界的关注。",
    reference: "In recent years, the digital economy has become an important engine driving global economic growth. In China, new business models such as e-commerce, mobile payment and the sharing economy are booming, profoundly changing people's lifestyles and consumption habits. The prosperity of the digital economy has not only created a large number of job opportunities but also promoted the transformation and upgrading of traditional industries. However, issues such as data security and privacy protection have increasingly attracted attention from all sectors of society.",
    points: ["数字经济 digital economy", "经济增长引擎 engine for economic growth", "电子商务 e-commerce", "蓬勃发展 booming/flourishing", "消费习惯 consumption habits", "转型升级 transformation and upgrading", "数据安全 data security"]
  }
];
