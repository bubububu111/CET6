/* 六级翻译扩展素材包 —— 补充真题风格翻译练习
 * 来源：六级真题改编、模拟练习、热点话题
 */
(function () {
  if (!window.CET6_PASSAGES) return;

  var ext = [
    {
      id: "p14", title: "丝绸之路", cat: "文化", year: "模拟",
      source: "丝绸之路是古代连接东西方的商贸通道，全长约7000公里。丝绸之路起源于公元前2世纪，始于中国长安，途经中亚，最终到达地中海地区。丝绸之路不仅促进了商品贸易，也推动了东西方文化、宗教和技术的交流。如今，丝绸之路已成为世界文化遗产，沿线城市积极发展旅游业，吸引着来自世界各地的游客。",
      reference: "The Silk Road was an ancient trade route connecting the East and the West, with a total length of about 7,000 kilometers. Originating in the 2nd century BC, the Silk Road started from Chang'an in China, passed through Central Asia, and finally reached the Mediterranean region. The Silk Road not only promoted trade in goods but also facilitated the exchange of culture, religion and technology between the East and the West. Nowadays, the Silk Road has become a world cultural heritage, and cities along the route are actively developing tourism, attracting tourists from all over the world.",
      points: ["商贸通道 trade route", "起源于 originate from", "途经 pass through", "促进 promote/facilitate", "文化交流 cultural exchange", "世界文化遗产 world cultural heritage", "沿线城市 cities along the route"]
    },
    {
      id: "p15", title: "中国茶文化", cat: "文化", year: "模拟",
      source: "中国是茶的故乡，茶文化在中国有着数千年的历史。中国人饮茶不仅是为了解渴，更是一种社交活动和修身养性的方式。在中国，以茶待客是最基本的礼节之一。不同地区有着不同的茶文化，如广东的早茶文化、福建的工夫茶等。如今，中国茶已传播到世界各地，成为最受欢迎的饮品之一。",
      reference: "China is the birthplace of tea, and tea culture has a history of several thousand years in China. For Chinese people, drinking tea is not only for quenching thirst but also a social activity and a way of cultivating one's character. In China, serving tea to guests is one of the most basic etiquette. Different regions have different tea cultures, such as the morning tea culture in Guangdong and the Gongfu tea in Fujian. Nowadays, Chinese tea has spread to all parts of the world and become one of the most popular beverages.",
      points: ["故乡 birthplace", "解渴 quench thirst", "社交活动 social activity", "修身养性 cultivate one's character", "以茶待客 serve tea to guests", "礼节 etiquette", "工夫茶 Gongfu tea"]
    },
    {
      id: "p16", title: "共享经济", cat: "经济", year: "模拟",
      source: "近年来，共享经济在中国蓬勃发展，成为经济增长的新动力。共享单车、共享充电宝、共享办公空间等多种形式的共享服务深入人们的生活。共享经济不仅提高了资源利用效率，减少了浪费，还为消费者提供了更加便捷和经济的消费选择。然而，共享经济也面临着监管、安全和环境等方面的挑战。",
      reference: "In recent years, the sharing economy has boomed in China, becoming a new driving force for economic growth. Various forms of sharing services, such as shared bicycles, shared power banks and shared office spaces, have penetrated into people's daily lives. The sharing economy has not only improved resource utilization efficiency and reduced waste but also provided consumers with more convenient and economical choices. However, the sharing economy also faces challenges in regulation, safety and environmental protection.",
      points: ["蓬勃发展 boom/flourish", "新动力 new driving force", "共享单车 shared bicycles", "共享充电宝 shared power banks", "资源利用效率 resource utilization efficiency", "便捷 convenient", "监管 regulation"]
    },
    {
      id: "p17", title: "中国传统医学", cat: "文化", year: "模拟",
      source: "中医是中国传统医学的简称，有着数千年的历史。中医以整体观念和辨证论治为核心，强调人与自然的和谐统一。中医的诊断方法包括望、闻、问、切四种。中药、针灸和推拿是中医的主要治疗手段。近年来，中医越来越受到国际社会的关注，在许多国家得到了广泛应用。",
      reference: "Traditional Chinese Medicine, abbreviated as TCM, has a history of several thousand years. TCM takes the holistic concept and syndrome differentiation-based treatment as its core, emphasizing the harmony and unity between human beings and nature. The diagnostic methods of TCM include four approaches: observation, auscultation and olfaction, inquiry, and pulse-taking. Chinese herbal medicine, acupuncture and massage are the main treatment methods of TCM. In recent years, TCM has attracted increasing attention from the international community and has been widely applied in many countries.",
      points: ["简称 abbreviation", "整体观念 holistic concept", "辨证论治 syndrome differentiation-based treatment", "和谐统一 harmony and unity", "望闻问切 observation, auscultation and olfaction, inquiry, pulse-taking", "针灸 acupuncture", "推拿 massage"]
    },
    {
      id: "p18", title: "中国脱贫攻坚", cat: "社会", year: "模拟",
      source: "中国用八年时间实现了近一亿农村贫困人口的脱贫，创造了人类减贫史上的奇迹。在脱贫攻坚过程中，中国实施了精准扶贫战略，通过产业扶贫、教育扶贫、健康扶贫等多种措施，确保每个贫困家庭都能得到有针对性的帮助。2020年底，中国宣布消除了绝对贫困，全面建成了小康社会。",
      reference: "China achieved the lifting of nearly 100 million rural poor population out of poverty in eight years, creating a miracle in the history of poverty reduction. During the battle against poverty, China implemented the strategy of targeted poverty alleviation, adopting various measures such as poverty alleviation through industry, education and healthcare, to ensure that every impoverished family could receive tailored assistance. By the end of 2020, China announced the eradication of absolute poverty and the full completion of building a moderately prosperous society in all respects.",
      points: ["脱贫 lift out of poverty", "减贫 poverty reduction", "精准扶贫 targeted poverty alleviation", "产业扶贫 poverty alleviation through industry", "有针对性的帮助 tailored assistance", "绝对贫困 absolute poverty", "小康社会 moderately prosperous society"]
    },
    {
      id: "p19", title: "北京冬奥会", cat: "文化", year: "2022.2",
      source: "2022年北京冬奥会是中国首次举办的冬季奥林匹克运动会。北京成为世界上第一个既举办过夏季奥运会又举办过冬季奥运会的城市。北京冬奥会设有七个大项、十五个分项和一百零九个小项。中国运动员在本届冬奥会上取得了历史最好成绩，共获得九枚金牌。北京冬奥会的成功举办展示了中国的发展成就和组织能力。",
      reference: "The 2022 Beijing Winter Olympics was the first Winter Olympic Games held by China. Beijing became the first city in the world to have hosted both the Summer and Winter Olympic Games. The Beijing Winter Olympics featured seven sports, fifteen disciplines and 109 events. Chinese athletes achieved their best-ever results at this Winter Olympics, winning a total of nine gold medals. The successful hosting of the Beijing Winter Olympics demonstrated China's development achievements and organizational capabilities.",
      points: ["冬奥会 Winter Olympics", "举办 host", "大项 sports", "分项 disciplines", "小项 events", "历史最好成绩 best-ever results", "组织能力 organizational capabilities"]
    },
    {
      id: "p20", title: "人工智能在中国", cat: "科技", year: "模拟",
      source: "中国在人工智能领域发展迅速，已成为全球人工智能创新的重要中心之一。中国的人工智能技术广泛应用于医疗、教育、交通和金融等领域。在医疗方面，AI辅助诊断系统帮助医生提高诊断效率。在交通方面，自动驾驶技术正在改变人们的出行方式。然而，人工智能的发展也引发了关于数据安全、隐私保护和就业等方面的讨论。",
      reference: "China has developed rapidly in the field of artificial intelligence and has become one of the important centers for global AI innovation. China's AI technology is widely applied in fields such as healthcare, education, transportation and finance. In healthcare, AI-assisted diagnosis systems help doctors improve diagnostic efficiency. In transportation, autonomous driving technology is changing the way people travel. However, the development of AI has also triggered discussions about data security, privacy protection and employment.",
      points: ["人工智能 artificial intelligence", "创新中心 innovation center", "辅助诊断 assisted diagnosis", "诊断效率 diagnostic efficiency", "自动驾驶 autonomous driving", "数据安全 data security", "隐私保护 privacy protection"]
    },
    {
      id: "p21", title: "中国乡村振兴", cat: "社会", year: "模拟",
      source: "乡村振兴战略是中国政府提出的重要国家战略，旨在促进农村经济社会全面发展。该战略强调产业兴旺、生态宜居、乡风文明、治理有效和生活富裕。通过发展特色产业、改善基础设施、保护生态环境等措施，农村地区正在发生深刻变化。乡村振兴不仅有利于缩小城乡差距，也为中国经济的高质量发展提供了新动能。",
      reference: "The rural revitalization strategy is an important national strategy proposed by the Chinese government, aiming to promote the comprehensive economic and social development of rural areas. The strategy emphasizes prosperous industry, livable ecology, civilized rural culture, effective governance and affluent living. Through measures such as developing characteristic industries, improving infrastructure and protecting the ecological environment, rural areas are undergoing profound changes. Rural revitalization is not only beneficial for narrowing the urban-rural gap but also provides new momentum for China's high-quality economic development.",
      points: ["乡村振兴 rural revitalization", "国家战略 national strategy", "产业兴旺 prosperous industry", "生态宜居 livable ecology", "治理有效 effective governance", "城乡差距 urban-rural gap", "高质量发展 high-quality development"]
    },
    {
      id: "p22", title: "中国新能源", cat: "科技", year: "模拟",
      source: "中国在新能源领域取得了举世瞩目的成就。中国是全球最大的太阳能和风能生产国，新能源汽车产销量连续多年位居世界第一。新能源汽车的普及不仅减少了碳排放，也改变了中国汽车产业的格局。然而，新能源发展仍面临技术突破、充电基础设施建设和电池回收等挑战。",
      reference: "China has achieved remarkable accomplishments in the field of new energy. China is the world's largest producer of solar and wind energy, and the production and sales of new energy vehicles have ranked first in the world for consecutive years. The popularization of new energy vehicles has not only reduced carbon emissions but also changed the landscape of China's automobile industry. However, new energy development still faces challenges such as technological breakthroughs, charging infrastructure construction and battery recycling.",
      points: ["新能源 new energy", "太阳能 solar energy", "风能 wind energy", "新能源汽车 new energy vehicles", "碳排放 carbon emissions", "充电基础设施 charging infrastructure", "电池回收 battery recycling"]
    },
    {
      id: "p23", title: "中国传统节日", cat: "文化", year: "模拟",
      source: "中国传统节日是中华文化的重要组成部分，承载着丰富的历史和文化内涵。春节、清明节、端午节和中秋节并称为中国四大传统节日。每个节日都有独特的习俗和活动。例如，春节期间贴春联、放鞭炮、吃饺子；中秋节赏月、吃月饼。传统节日不仅是家人团聚的时刻，也是传承中华文化的重要载体。",
      reference: "Traditional Chinese festivals are an important part of Chinese culture, carrying rich historical and cultural connotations. The Spring Festival, the Tomb-Sweeping Day, the Dragon Boat Festival and the Mid-Autumn Festival are known as the four major traditional Chinese festivals. Each festival has its unique customs and activities. For example, during the Spring Festival, people put up Spring Festival couplets, set off firecrackers and eat dumplings; during the Mid-Autumn Festival, people admire the moon and eat moon cakes. Traditional festivals are not only occasions for family reunion but also important carriers for passing on Chinese culture.",
      points: ["传统节日 traditional festivals", "文化内涵 cultural connotations", "清明节 Tomb-Sweeping Day", "端午节 Dragon Boat Festival", "春联 Spring Festival couplets", "放鞭炮 set off firecrackers", "赏月 admire the moon", "传承 pass on/carry forward"]
    }
  ];

  // 将扩展素材追加到全局数组
  for (var i = 0; i < ext.length; i++) {
    window.CET6_PASSAGES.push(ext[i]);
  }
})();
