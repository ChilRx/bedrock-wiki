---
title: Materials
show_toc: false
---

You can [learn more about materials here](/visuals/materials).

| Material                                  | Note                            |
| ----------------------------------------- | ------------------------------- |
| alpha_block                               |                                 |
| alpha_block_color                         |                                 |
| banner                                    |                                 |
| banner_pole                               |                                 |
| beacon_beam                               |                                 |
| beacon_beam_transparent                   |                                 |
| charged_creeper                           |                                 |
| conduit_wind                              |                                 |
| entity                                    | Material not used by common entities though is the parent materials such as `entity_emissive` `entity_emissive_alpha_one_sided` `entity_custom` etc. This material enables backface culling[¹](#1)|
| entity_alphablend                         | Useful for translucent textures |
| entity_alphablend_nocolorentity_static    |                                 |
| entity_alphatest                          | For transparancy and disables backface culling[¹](#1)|
| entity_alphatest_change_color             | For entities that use transparent[²](#2) pixels and get colored in by the game such as leather armor|
| entity_alphatest_change_color_glint       | Same as `entity_alphatest_change_color` but with enchantment glint over it|
| entity_alphatest_glint                    | This will allow for transparency[²](#2) and add enchantment glint overlay|
| entity_alphatest_glint_item               | Same as `entity_alphatest_glint`|
| entity_alphatest_multicolor_tint          |                                 |
| entity_beam                               |                                 |
| entity_beam_additive                      |                                 |
| entity_change_color                       | For entities that will be colored by the game such as sheep and wolf, this material does not allow for transparency[²](#2)|
| entity_change_color_glint                 | Same as `entity_change_color` but with enchantment glint overlay|
| entity_custom                             | This will allow transparent[²](#2) and translucent textures and has backface culling[¹](#1)|
| entity_dissolve_layer0                    |                                 |
| entity_dissolve_layer1                    |                                 |
| entity_emissive                           | Allows entities to ignore light. Any transparent[²](#2) pixels will become opaque. You can control how much light the entity can ignore by it's pixel's alpha value, the lower the value the more light it ignores. This material has backface culling[¹](#1)|
| entity_emissive_alpha                     |                                 |
| entity_emissive_alpha_one_sided           |                                 |
| entity_flat_color_line                    |                                 |
| entity_glint                              |                                 |
| entity_lead_base                          |                                 |
| entity_loyalty_rope                       |                                 |
| entity_multitexture                       |                                 |
| entity_multitexture_alpha_test            |                                 |
| entity_multitexture_alpha_test_color_mask |                                 |
| entity_multitexture_color_mask            |                                 |
| entity_multitexture_masked                |                                 |
| entity_multitexture_multiplicative_blend  |                                 |
| entity_nocull                             |                                 |
| guardian_ghost                            |                                 |
| item_in_hand                              |                                 |
| item_in_hand_entity_alphatest             |                                 |
| item_in_hand_entity_alphatest_color       |                                 |
| item_in_hand_glint                        |                                 |
| item_in_hand_multicolor_tint              |                                 |
| map                                       |                                 |
| map_decoration                            |                                 |
| map_marker                                |                                 |
| moving_block                              |                                 |
| moving_block_alpha                        |                                 |
| moving_block_alpha_seasons                |                                 |
| moving_block_alpha_single_side            |                                 |
| moving_block_blend                        |                                 |
| moving_block_double_side                  |                                 |
| moving_block_seasons                      |                                 |
| opaque_block                              |                                 |
| opaque_block_color                        |                                 |
| opaque_block_color_uv2                    |                                 |

### Keywords

<a name="1"></a>  **Backface Culling**: removes any faces of the entity model that is not facing the player. Meaning if the camera is inside of a cube it is possible can see what is outside without the entity texture obstructing the camera. This feature is used for signs, chests, boats, bells etc.

<a name="2"></a> **Transparency**: Makes pixels with alpha value under 0.5 (50%) invisible


[Original Credit](http://tokamcwin10.blog.jp/archives/40825563)
