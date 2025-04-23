import { Typography, Box, Paper } from "@mui/material";


const Content = () => {
  const Items = [
    {
      title: "Demystifying Tariffs: A Modern Economic Analysis",
      subtitle: "Introduction",
      content:
        "In February 2025, President Trump implemented an extra 25 percent tariff on imports from Canada and Mexico and a 10 percent tariff on imports from China, which doubled to 20 percent last week. There’s also a 10 percent tariff on energy resources from Canada. This is significant as goods from China, Mexico and Canada accounted for more than 40 percent of imports into the US in 2024. On March 11, 2025, the uncertain climate led many investors to withdraw from tariffed sectors with elastic demand, causing a US stock market decline. So let’s cut to the chase and analyse how tariffs work, how effective or counter-effective they are, their historic trend and their similarity to subsidies.",
    },
    {
      title: "Tariffs vs. Free Trade",
      content:
        "A free market operates on Ricardo’s principle of comparative advantage, where trade exists because no country is self-sufficient. Countries either lack resources (e.g., India importing crude from the Middle East), infrastructure (e.g., the US importing pharmaceuticals from India), or expertise (e.g., the US and China importing electronic chips from Taiwan). Countries should specialize in producing goods and services with lower opportunity costs and export them, while freely importing others. This leads to better quality and lower costs for consumers. Support for free trade—a key pillar of the free market—peaked during the globalization era after the WTO’s formation in 1995. However, governments often intervene by imposing tariffs, which are taxes on imports. Alongside quotas, tariffs are significant trade barriers, increasing prices for consumers and forcing them to buy costlier domestic products if demand is inelastic. This is part of a wider subject of Foreign Trade Policy.",
    },
    {
      title: "Effects of Tariffs",
      content:
        "In the short term, tariffs reduce imports, boost domestic production, and raise costs of inputs and contribute to increases of consumer prices. This is illustrated by the demand-supply curve (Fig. 1). As domestic consumers buy less and domestic producers supply more, imports decrease. The graph shows overproduction and underconsumption losses, together representing the Dead-Weight Loss (DWL) in the economy. Tariffs exacerbate inflation, reducing disposable income, especially for lower-income groups, making them a regressive tax. This increases demand for government spending and makes people more dependent on the government. Inflation is more pronounced when tariffs are applied to intermediate capital goods like steel, semiconductors, and fabric, which make up two-thirds of world trade. Cascading tax effects and profit margins at each level magnify price distortions down the supply chain.",
    },
    {
      title: "Infant Industry Argument",
      content:
        "In the long-term, tariffs apparently protect domestic manufacturers from global competition. This protectionism is often politicized, ensuring employment and pleasing local interest groups, supposedly aiding industrialization in infant sectors of developing economies. However, I disagree due to protectionism’s unseen costs which was brought out in Frederic Bastiat’s 1845 essay “Candlemakers’ Petition,” where he satirized candlemakers seeking protection from foreign competition. He argued that candlemakers are not advocating for the welfare of the French people, but rather for their own self-interest. By reducing competition, efficiency, and innovation in protected domestic industries, we have cronyism, lobbyism, and global overcapacity.This creates a dichotomy with protected firms lacking incentives to improve, while the free-market firms struggle. Furceri et al. (2019) found that increased tariffs result in a 0.4 percent decline in output growth over five years.Negating the employment claim, the US Steel Tariff of 2018 led to invisible job losses of around 75,000 and deadweight losses in downstream sectors, contrasting with 1,000 new visible steel jobs—each costing US customers $900,000—as per one study.",
    },
    {
      title: "National Security Argument",
      content:
        "Another long-term objective of tariffs is national security, aiming to make countries self-reliant in critical sectors like semiconductors and energy, or to diversify trade supply chains. This argument gained traction due to over-reliance on China, highlighted by rising labor costs (Fig. 2), the US-China Trade War 2018, and supply chain failures during China’s Zero Covid policy 2020. Countries began decoupling from China, moving manufacturing to Vietnam and India (friendshoring) under the China+1 approach. However, this involved logistical challenges.",
    },
    {
      title: "Are Retaliatory Tariffs Justified?",
      content:
        "Trade deficits are one reason given for imposing tariffs. But trade deficits create American jobs by funding otherwise unfunded domestic investment with offshore savings. Moreover, relatively low merchandise exports by the US as compared to Germany or China is not just due to foreign tariffs but also supply-side constraints within the US which discourage economies of scale. Further, a trade imbalance demonstrates many voluntary exchanges. Again, trade-distorting subsidies are often used to justify retaliatory tariffs, as seen when the US and EU imposed tariffs on Chinese EVs (100 percent) and batteries (25 percent) last year. Suppose those retaliatory tariffs were never enacted. Then, following the argument of Milton Friedman, the Chinese would have sold more EVs and utilized the earned dollars to buy goods and services, either from the US or other nations, thereby re-investing back in the US.",
    },
    {
      title: "Historic Trend of Tariffs",
      content:
        "During the late 19th century Gilded Age in the US, certain sectors protected by high tariffs—like textiles and chemicals—showed low productivity and struggled, while sectors exposed to international competition, like electrical machinery, innovated and excelled. The Smoot-Hawley Tariff Act of 1930—widely seen as worsening the Great Depression—finally led to a sharp abandonment of tariff policies in the US until 2018 ",
    },
    {
      title: "Post Colonial States",
      content:
        "Post-WWII, newly-independent nations in Asia, Africa, and Latin America adopted Keynesian and Institutional Economics, Dependency Theory, and Import Substitution Industrialization to reduce dependence on former colonial powers. Larger countries like India and China placed their domestic markets behind a tariff wall, while smaller nations like South Korea and Singapore pursued export-led growth through free trade, achieving rapid success. These post-colonial states initially thrived on consumption-led growth and primary goods exports, but the Prebisch-Singer thesis predicts a “resource curse,” leading to adverse terms of trade and balance of payments crises. This stimulated both liberalization reforms and import substitution, resulting in their presently high tariffs ",
    },
    {
      title: "Subsidy vs Tariff",
      content:
        "Some view domestic subsidies as a better alternative to tariffs, but both are forms of protectionism that create inefficiencies and interfere with free market dynamics. Consumers either bear the cost through higher taxes (subsidies) or prices (tariffs).Subsidies—like tariffs—can lead to trade wars. For instance, EU’s CAP subsidies have protected European farmers but caused overproduction and trade disputes. Similarly, the US and EU have long disputed each other’s subsidies to Boeing and Airbus. Finally, subsidies are often given to a company in a bid to offset the losses it has incurred due to tariffs, infrastructure gaps, and regulatory hurdles. But it’s like one wrong to cover up another wrong, by burdening those taxpayers who may never benefit from these subsidized products.",
    },
    {
      title: "Conclusion",
      content:
        "So the final question is: Are tariffs any good at all, at least when they’re targeted? I would answer by quoting Milton Friedman’s excerpt from his speech at the University of Utah in 1978 when he exposed the unreasonableness of steel tariffs: You know you could have a great employment in the city of Logan, Utah, of people growing bananas in hot houses. If we had a high enough tariff on the import of bananas, it could become profitable to build hot houses and grow bananas in hot houses. That would give employment. Would that be a sensible thing to do? If that isn’t sensible then neither is it sensible to artificially restrict the import of steel.",
    },
  ];

  const getBackgroundColor = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #f5f7fa 0%, #3c419b 100%)',  // 1st item
      'linear-gradient(155deg, #f5f7fa 0%, #3c419b 100%)',  // 2nd item
      'linear-gradient(175deg, #f5f7fa 0%, #4e50a8 100%)',  // 3rd item
      'linear-gradient(195deg, #f5f7fa 0%, #606fb6 100%)',  // 4th item
      'linear-gradient(205deg, #f5f7fa 0%, #728dc3 100%)',  // 5th item
      'linear-gradient(225deg, #f5f7fa 0%, #728dc3 100%)',  // 6th item
      'linear-gradient(265deg, #f5f7fa 0%, #84aacf 100%)',  // 7th item
      'linear-gradient(305deg, #f5f7fa 0%, #96c7da 100%)',  // 8th item
      'linear-gradient(345deg, #f5f7fa 0%, #a8e4e6 100%)',  // 9th item
      'linear-gradient(385deg, #f5f7fa 0%, #a8e4e6 100%)',  // 10th item
    ];
    return gradients[index];
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {Items.map((item, index) => (
        <Box
          key={index}
          sx={{
            // scrollSnapAlign: "start",
            // scrollSnapType: 'y mandatory',
            // scrollBehavior: 'smooth',
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: getBackgroundColor(index),
            borderBottom: "2px solid white",
            position: "relative",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: 4,
              my: 2,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            {item.subtitle && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                paragraph
              >
                {item.subtitle}
              </Typography>
            )}
            <Typography variant="body1" paragraph>
              {item.content}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
