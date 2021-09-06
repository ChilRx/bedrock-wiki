import{r as n,o as s,c as a,a as t,w as e,b as p,d as o}from"./404.md.6bd8988c.js";const r='{"title":"Generating Feature Based Surface Builder","description":"","frontmatter":{"title":"Generating Feature Based Surface Builder","mention":["DerpMcaddon"],"tags":["experimental"]},"headers":[{"level":2,"title":"Single Block Features","slug":"single-block-features"}],"relativePath":"world-generation/surface_builder.md","lastUpdated":1630902499525}',l={},u=t("p",null,"Feature based surface builder is a feature that puts together a collection of blocks that serve to add variety and decoration to the Overworld surface. This tutorial will explain what is needed to create this feature, including size, frequency, generation location, and more!",-1),c=t("h2",{id:"single-block-features"},[t("a",{class:"header-anchor",href:"#single-block-features","aria-hidden":"true"},"#"),p(" Single Block Features")],-1),i=t("p",null,"Single block features are going to be the base of our surface builder. They will define which blocks we are goingto use. For this tutorial I'll be using Coarse Dirt, Podzol and Cobblestone.",-1),b=t("p",null,[p("Learn more about single block features "),t("a",{href:"/world-generation/feature-types.html#single-block-features"},"here")],-1),k=t("p",null,"Coarse Dirt File",-1),m=p("BP/features/coarse_dirt_feature.json"),q=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:single_block_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:coarse_dirt_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//Coarse dirt shares same identifier as dirt, set it using name and states</span>\n\t\t\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:dirt&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;dirt_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;coarse&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;enforce_survivability_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;enforce_placement_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;may_replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;minecraft:grass&quot;</span><span class="token comment">//The block can only replace grass</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\nPodzol File\n\n&lt;CodeHeader&gt;BP/features/podzol_feature.json&lt;/CodeHeader&gt;\n\n```json\n<span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:single_block_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:podzol_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:podzol&quot;</span><span class="token punctuation">,</span><span class="token comment">//Podzol can be defined using direct identifier</span>\n\t\t<span class="token property">&quot;enforce_survivability_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;enforce_placement_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;may_replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;minecraft:grass&quot;</span><span class="token comment">//The block can only replace grass</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\nCobblestone File\n\n&lt;CodeHeader&gt;BP/features/cobblestone_feature.json&lt;/CodeHeader&gt;\n\n```json\n<span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:single_block_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:cobblestone_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cobblestone&quot;</span><span class="token punctuation">,</span><span class="token comment">//Podzol can be defined using direct identifier</span>\n\t\t<span class="token property">&quot;enforce_survivability_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;enforce_placement_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;may_replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;minecraft:grass&quot;</span><span class="token comment">//The block can only replace grass</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\n\n## Weighted Random Features\n\nWeighted random features are going to be our *randomizer* to select between each type of blocks.\n\nLearn more about weighted random features <span class="token punctuation">[</span>here<span class="token punctuation">]</span>(/world-generation/feature-types.html#weighted-random-features)\n\n&lt;CodeHeader&gt;BP/features/select_surface_block_feature.json&lt;/CodeHeader&gt;\n\n```json\n<span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:weighted_random_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:select_surface_block_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">[</span>\n\t\t\t\t<span class="token string">&quot;wiki:coarse_dirt_feature&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Coarse dirt weighs 5</span>\n\t\t\t\t<span class="token number">5</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">[</span>\n\t\t\t\t<span class="token string">&quot;wiki:podzol_feature&quot;</span><span class="token punctuation">,</span><span class="token comment">//Podzol dirt weighs 3</span>\n\t\t\t\t<span class="token number">3</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">[</span>\n\t\t\t\t<span class="token string">&quot;wiki:cobblestone_feature&quot;</span><span class="token punctuation">,</span><span class="token comment">//Cobblestone dirt weighs 2</span>\n\t\t\t\t<span class="token number">2</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\n## Scatter Features\n\nScatter features are an important part of our surface builder. It will determine the size<span class="token punctuation">,</span> shape and number of blocks in one blob.\n\nLearn more about scatter features <span class="token punctuation">[</span>here<span class="token punctuation">]</span>(/world-generation/feature-types.html#scatter-features)\n\n\n&lt;CodeHeader&gt;BP/features/scatter_surface_block_feature.json&lt;/CodeHeader&gt;\n\n```json\n<span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:scatter_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:scatter_surface_block_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token number">8</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaussian&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token number">8</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaussian&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.heightmap(v.worldx, v.worldz) -1&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:select_surface_block_feature&quot;</span><span class="token comment">//Weighted random feature identifier</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\n\n� `iterations` determine how many blocks will be placed. I&#39;m going to use the Molang `math.random` function to randomize the number of blocks. In this case<span class="token punctuation">,</span> it&#39;ll be <span class="token number">20</span> to <span class="token number">25</span> blocks.\n\n� `extent` use an array to determine the size of the blob. `<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>` means the size is extended from <span class="token number">0</span> to <span class="token number">8</span> blocks. So<span class="token punctuation">,</span> our blob would be <span class="token number">8</span> blocks long both on X and Z axis. **Only use this for X and Z distribution**.\n\n \n� `<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> &quot;query.heightmap(v.worldx<span class="token punctuation">,</span> v.worldz) <span class="token number">-1</span>` means it will put the block on the highest block on the y coordinate <span class="token number">-1</span>. So it&#39;ll always put the feature on the surface.\n\n\n� `distribution` specifies the type of distribution to use. Available include `Gaussian`<span class="token punctuation">,</span> `Inverse Gaussian`<span class="token punctuation">,</span> `Uniform`<span class="token punctuation">,</span>`Fixed Grid` and `Jittered Grid`\n\n\n## Feature Rule\n\nThis is the final step for our surface builder. The feature rules for our surface builders are slightly different.\n\n\n&lt;CodeHeader&gt;BP/feature_rules/overworld_surface_blocks_feature.json&lt;/CodeHeader&gt;\n\njson```\n<span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:overworld_surface_blocks_feature&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:scatter_surface_block_feature&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;surface_pass&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld&quot;</span><span class="token comment">//You can change this to whatever biometag you want</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token number">16</span>\n\t\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token number">16</span>\n\t\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//Chance of the blob generating each chunk</span>\n\t\t\t\t<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">5</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>```\n\nAnd our surface builder is done! Feel free to modify and messing around with it!\n\n!<span class="token punctuation">[</span><span class="token punctuation">]</span>(/assets/images/concepts/animation-controllers/surface_builder_preview.png)\n\n\n\n\n\n\n\n\n\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br></div></div>',1);l.render=function(p,o,r,l,d,f){const g=n("CodeHeader");return s(),a("div",null,[u,c,i,b,k,t(g,null,{default:e((()=>[m])),_:1}),q])};export default l;export{r as __pageData};