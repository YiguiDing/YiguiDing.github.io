import { Atlas } from "./object/Atlas";
import { flipImage, loadAudio, loadImg } from "./utils";
import png_1P_path from "./assets/1P.png";
import png_1P_cursor_path from "./assets/1P_cursor.png";
import png_1P_desc_path from "./assets/1P_desc.png";
import png_1P_selector_btn_down_path from "./assets/1P_selector_btn_down.png";
import png_1P_selector_btn_idle_path from "./assets/1P_selector_btn_idle.png";
import png_1P_winner_path from "./assets/1P_winner.png";
import png_2P_path from "./assets/2P.png";
import png_2P_cursor_path from "./assets/2P_cursor.png";
import png_2P_desc_path from "./assets/2P_desc.png";
import png_2P_selector_btn_down_path from "./assets/2P_selector_btn_down.png";
import png_2P_selector_btn_idle_path from "./assets/2P_selector_btn_idle.png";
import png_2P_winner_path from "./assets/2P_winner.png";
import png_avatar_peashooter_path from "./assets/avatar_peashooter.png";
import png_avatar_sunflower_path from "./assets/avatar_sunflower.png";
import png_gravestone_path from "./assets/gravestone.png";
import png_hills_path from "./assets/hills.png";
import png_menu_background_path from "./assets/menu_background.png";
import png_pea_path from "./assets/pea.png";
import png_peashooter_selector_background_path from "./assets/peashooter_selector_background.png";
import png_platform_large_path from "./assets/platform_large.png";
import png_platform_small_path from "./assets/platform_small.png";
import png_selector_background_path from "./assets/selector_background.png";
import png_selector_tip_path from "./assets/selector_tip.png";
import png_sky_path from "./assets/sky.png";
import png_sunflower_selector_background_path from "./assets/sunflower_selector_background.png";
import png_VS_path from "./assets/VS.png";
import png_winnner_bar_path from "./assets/winnner_bar.png";
import atlas_jump_effect_1_path from "./assets/jump_effect_1.png";
import atlas_jump_effect_2_path from "./assets/jump_effect_2.png";
import atlas_jump_effect_3_path from "./assets/jump_effect_3.png";
import atlas_jump_effect_4_path from "./assets/jump_effect_4.png";
import atlas_jump_effect_5_path from "./assets/jump_effect_5.png";
import atlas_land_effect_1_path from "./assets/land_effect_1.png";
import atlas_land_effect_2_path from "./assets/land_effect_2.png";
import atlas_pea_break_1_path from "./assets/pea_break_1.png";
import atlas_pea_break_2_path from "./assets/pea_break_2.png";
import atlas_pea_break_3_path from "./assets/pea_break_3.png";
import atlas_peashooter_attack_ex_1_path from "./assets/peashooter_attack_ex_1.png";
import atlas_peashooter_attack_ex_2_path from "./assets/peashooter_attack_ex_2.png";
import atlas_peashooter_attack_ex_3_path from "./assets/peashooter_attack_ex_3.png";
import atlas_peashooter_die_1_path from "./assets/peashooter_die_1.png";
import atlas_peashooter_die_2_path from "./assets/peashooter_die_2.png";
import atlas_peashooter_die_3_path from "./assets/peashooter_die_3.png";
import atlas_peashooter_die_4_path from "./assets/peashooter_die_4.png";
import atlas_peashooter_idle_1_path from "./assets/peashooter_idle_1.png";
import atlas_peashooter_idle_2_path from "./assets/peashooter_idle_2.png";
import atlas_peashooter_idle_3_path from "./assets/peashooter_idle_3.png";
import atlas_peashooter_idle_4_path from "./assets/peashooter_idle_4.png";
import atlas_peashooter_idle_5_path from "./assets/peashooter_idle_5.png";
import atlas_peashooter_idle_6_path from "./assets/peashooter_idle_6.png";
import atlas_peashooter_idle_7_path from "./assets/peashooter_idle_7.png";
import atlas_peashooter_idle_8_path from "./assets/peashooter_idle_8.png";
import atlas_peashooter_idle_9_path from "./assets/peashooter_idle_9.png";
import atlas_peashooter_run_1_path from "./assets/peashooter_run_1.png";
import atlas_peashooter_run_2_path from "./assets/peashooter_run_2.png";
import atlas_peashooter_run_3_path from "./assets/peashooter_run_3.png";
import atlas_peashooter_run_4_path from "./assets/peashooter_run_4.png";
import atlas_peashooter_run_5_path from "./assets/peashooter_run_5.png";
import atlas_run_effect_1_path from "./assets/run_effect_1.png";
import atlas_run_effect_2_path from "./assets/run_effect_2.png";
import atlas_run_effect_3_path from "./assets/run_effect_3.png";
import atlas_run_effect_4_path from "./assets/run_effect_4.png";
import atlas_sun_1_path from "./assets/sun_1.png";
import atlas_sun_2_path from "./assets/sun_2.png";
import atlas_sun_3_path from "./assets/sun_3.png";
import atlas_sun_4_path from "./assets/sun_4.png";
import atlas_sun_5_path from "./assets/sun_5.png";
import atlas_sun_ex_1_path from "./assets/sun_ex_1.png";
import atlas_sun_ex_2_path from "./assets/sun_ex_2.png";
import atlas_sun_ex_3_path from "./assets/sun_ex_3.png";
import atlas_sun_ex_4_path from "./assets/sun_ex_4.png";
import atlas_sun_ex_5_path from "./assets/sun_ex_5.png";
import atlas_sun_ex_explode_1_path from "./assets/sun_ex_explode_1.png";
import atlas_sun_ex_explode_2_path from "./assets/sun_ex_explode_2.png";
import atlas_sun_ex_explode_3_path from "./assets/sun_ex_explode_3.png";
import atlas_sun_ex_explode_4_path from "./assets/sun_ex_explode_4.png";
import atlas_sun_ex_explode_5_path from "./assets/sun_ex_explode_5.png";
import atlas_sun_explode_1_path from "./assets/sun_explode_1.png";
import atlas_sun_explode_2_path from "./assets/sun_explode_2.png";
import atlas_sun_explode_3_path from "./assets/sun_explode_3.png";
import atlas_sun_explode_4_path from "./assets/sun_explode_4.png";
import atlas_sun_explode_5_path from "./assets/sun_explode_5.png";
import atlas_sun_text_1_path from "./assets/sun_text_1.png";
import atlas_sun_text_2_path from "./assets/sun_text_2.png";
import atlas_sun_text_3_path from "./assets/sun_text_3.png";
import atlas_sun_text_4_path from "./assets/sun_text_4.png";
import atlas_sun_text_5_path from "./assets/sun_text_5.png";
import atlas_sun_text_6_path from "./assets/sun_text_6.png";
import atlas_sunflower_attack_ex_1_path from "./assets/sunflower_attack_ex_1.png";
import atlas_sunflower_attack_ex_2_path from "./assets/sunflower_attack_ex_2.png";
import atlas_sunflower_attack_ex_3_path from "./assets/sunflower_attack_ex_3.png";
import atlas_sunflower_attack_ex_4_path from "./assets/sunflower_attack_ex_4.png";
import atlas_sunflower_attack_ex_5_path from "./assets/sunflower_attack_ex_5.png";
import atlas_sunflower_attack_ex_6_path from "./assets/sunflower_attack_ex_6.png";
import atlas_sunflower_attack_ex_7_path from "./assets/sunflower_attack_ex_7.png";
import atlas_sunflower_attack_ex_8_path from "./assets/sunflower_attack_ex_8.png";
import atlas_sunflower_attack_ex_9_path from "./assets/sunflower_attack_ex_9.png";
import atlas_sunflower_die_1_path from "./assets/sunflower_die_1.png";
import atlas_sunflower_die_2_path from "./assets/sunflower_die_2.png";
import atlas_sunflower_idle_1_path from "./assets/sunflower_idle_1.png";
import atlas_sunflower_idle_2_path from "./assets/sunflower_idle_2.png";
import atlas_sunflower_idle_3_path from "./assets/sunflower_idle_3.png";
import atlas_sunflower_idle_4_path from "./assets/sunflower_idle_4.png";
import atlas_sunflower_idle_5_path from "./assets/sunflower_idle_5.png";
import atlas_sunflower_idle_6_path from "./assets/sunflower_idle_6.png";
import atlas_sunflower_idle_7_path from "./assets/sunflower_idle_7.png";
import atlas_sunflower_idle_8_path from "./assets/sunflower_idle_8.png";
import atlas_sunflower_run_1_path from "./assets/sunflower_run_1.png";
import atlas_sunflower_run_2_path from "./assets/sunflower_run_2.png";
import atlas_sunflower_run_3_path from "./assets/sunflower_run_3.png";
import atlas_sunflower_run_4_path from "./assets/sunflower_run_4.png";
import atlas_sunflower_run_5_path from "./assets/sunflower_run_5.png";

import mp3_bgm_game_path from "./assets/bgm_game.mp3";
import mp3_bgm_menu_path from "./assets/bgm_menu.mp3";
import mp3_pea_break_1_path from "./assets/pea_break_1.mp3";
import mp3_pea_break_2_path from "./assets/pea_break_2.mp3";
import mp3_pea_break_3_path from "./assets/pea_break_3.mp3";
import mp3_pea_shoot_1_path from "./assets/pea_shoot_1.mp3";
import mp3_pea_shoot_2_path from "./assets/pea_shoot_2.mp3";
import mp3_pea_shoot_ex_path from "./assets/pea_shoot_ex.mp3";
import mp3_sun_explode_path from "./assets/sun_explode.mp3";
import mp3_sun_explode_ex_path from "./assets/sun_explode_ex.mp3";
import mp3_sun_text_path from "./assets/sun_text.mp3";
import wav_ui_confirm_path from "./assets/ui_confirm.wav";
import wav_ui_switch_path from "./assets/ui_switch.wav";
import wav_ui_win_path from "./assets/ui_win.wav";

import ttf_IPix_path from "./assets/IPix.ttf";

export const png_1P = loadImg(png_1P_path);
export const png_1P_flip = flipImage(png_1P);
export const png_1P_cursor = loadImg(png_1P_cursor_path);
export const png_1P_cursor_flip = flipImage(png_1P_cursor);
export const png_1P_desc = loadImg(png_1P_desc_path);
export const png_1P_desc_flip = flipImage(png_1P_desc);
export const png_1P_selector_btn_down = loadImg(png_1P_selector_btn_down_path);
export const png_1P_selector_btn_down_flip = flipImage(
  png_1P_selector_btn_down
);
export const png_1P_selector_btn_idle = loadImg(png_1P_selector_btn_idle_path);
export const png_1P_selector_btn_idle_flip = flipImage(
  png_1P_selector_btn_idle
);
export const png_1P_winner = loadImg(png_1P_winner_path);
export const png_1P_winner_flip = flipImage(png_1P_winner);
export const png_2P = loadImg(png_2P_path);
export const png_2P_flip = flipImage(png_2P);
export const png_2P_cursor = loadImg(png_2P_cursor_path);
export const png_2P_cursor_flip = flipImage(png_2P_cursor);
export const png_2P_desc = loadImg(png_2P_desc_path);
export const png_2P_desc_flip = flipImage(png_2P_desc);
export const png_2P_selector_btn_down = loadImg(png_2P_selector_btn_down_path);
export const png_2P_selector_btn_down_flip = flipImage(
  png_2P_selector_btn_down
);
export const png_2P_selector_btn_idle = loadImg(png_2P_selector_btn_idle_path);
export const png_2P_selector_btn_idle_flip = flipImage(
  png_2P_selector_btn_idle
);
export const png_2P_winner = loadImg(png_2P_winner_path);
export const png_2P_winner_flip = flipImage(png_2P_winner);
export const png_avatar_peashooter = loadImg(png_avatar_peashooter_path);
export const png_avatar_peashooter_flip = flipImage(png_avatar_peashooter);
export const png_avatar_sunflower = loadImg(png_avatar_sunflower_path);
export const png_avatar_sunflower_flip = flipImage(png_avatar_sunflower);
export const png_gravestone = loadImg(png_gravestone_path);
export const png_gravestone_flip = flipImage(png_gravestone);
export const png_hills = loadImg(png_hills_path);
export const png_hills_flip = flipImage(png_hills);
export const png_menu_background = loadImg(png_menu_background_path);
export const png_menu_background_flip = flipImage(png_menu_background);
export const png_pea = loadImg(png_pea_path);
export const png_pea_flip = flipImage(png_pea);
export const png_peashooter_selector_background = loadImg(
  png_peashooter_selector_background_path
);
export const png_peashooter_selector_background_flip = flipImage(
  png_peashooter_selector_background
);
export const png_platform_large = loadImg(png_platform_large_path);
export const png_platform_large_flip = flipImage(png_platform_large);
export const png_platform_small = loadImg(png_platform_small_path);
export const png_platform_small_flip = flipImage(png_platform_small);
export const png_selector_background = loadImg(png_selector_background_path);
export const png_selector_background_flip = flipImage(png_selector_background);
export const png_selector_tip = loadImg(png_selector_tip_path);
export const png_selector_tip_flip = flipImage(png_selector_tip);
export const png_sky = loadImg(png_sky_path);
export const png_sky_flip = flipImage(png_sky);
export const png_sunflower_selector_background = loadImg(
  png_sunflower_selector_background_path
);
export const png_sunflower_selector_background_flip = flipImage(
  png_sunflower_selector_background
);
export const png_VS = loadImg(png_VS_path);
export const png_VS_flip = flipImage(png_VS);
export const png_winnner_bar = loadImg(png_winnner_bar_path);
export const png_winnner_bar_flip = flipImage(png_winnner_bar);
export const atlas_jump_effect = new Atlas().load([
  atlas_jump_effect_1_path,
  atlas_jump_effect_2_path,
  atlas_jump_effect_3_path,
  atlas_jump_effect_4_path,
  atlas_jump_effect_5_path,
]);
export const atlas_jump_effect_fliped = new Atlas().loadFlipAtlas(
  atlas_jump_effect
);
export const atlas_land_effect = new Atlas().load([
  atlas_land_effect_1_path,
  atlas_land_effect_2_path,
]);
export const atlas_land_effect_fliped = new Atlas().loadFlipAtlas(
  atlas_land_effect
);
export const atlas_pea_break = new Atlas().load([
  atlas_pea_break_1_path,
  atlas_pea_break_2_path,
  atlas_pea_break_3_path,
]);
export const atlas_pea_break_fliped = new Atlas().loadFlipAtlas(
  atlas_pea_break
);
export const atlas_peashooter_attack_ex = new Atlas().load([
  atlas_peashooter_attack_ex_1_path,
  atlas_peashooter_attack_ex_2_path,
  atlas_peashooter_attack_ex_3_path,
]);
export const atlas_peashooter_attack_ex_fliped = new Atlas().loadFlipAtlas(
  atlas_peashooter_attack_ex
);
export const atlas_peashooter_die = new Atlas().load([
  atlas_peashooter_die_1_path,
  atlas_peashooter_die_2_path,
  atlas_peashooter_die_3_path,
  atlas_peashooter_die_4_path,
]);
export const atlas_peashooter_die_fliped = new Atlas().loadFlipAtlas(
  atlas_peashooter_die
);
export const atlas_peashooter_idle = new Atlas().load([
  atlas_peashooter_idle_1_path,
  atlas_peashooter_idle_2_path,
  atlas_peashooter_idle_3_path,
  atlas_peashooter_idle_4_path,
  atlas_peashooter_idle_5_path,
  atlas_peashooter_idle_6_path,
  atlas_peashooter_idle_7_path,
  atlas_peashooter_idle_8_path,
  atlas_peashooter_idle_9_path,
]);
export const atlas_peashooter_idle_fliped = new Atlas().loadFlipAtlas(
  atlas_peashooter_idle
);
export const atlas_peashooter_run = new Atlas().load([
  atlas_peashooter_run_1_path,
  atlas_peashooter_run_2_path,
  atlas_peashooter_run_3_path,
  atlas_peashooter_run_4_path,
  atlas_peashooter_run_5_path,
]);
export const atlas_peashooter_run_fliped = new Atlas().loadFlipAtlas(
  atlas_peashooter_run
);
export const atlas_run_effect = new Atlas().load([
  atlas_run_effect_1_path,
  atlas_run_effect_2_path,
  atlas_run_effect_3_path,
  atlas_run_effect_4_path,
]);
export const atlas_run_effect_fliped = new Atlas().loadFlipAtlas(
  atlas_run_effect
);
export const atlas_sun = new Atlas().load([
  atlas_sun_1_path,
  atlas_sun_2_path,
  atlas_sun_3_path,
  atlas_sun_4_path,
  atlas_sun_5_path,
]);
export const atlas_sun_fliped = new Atlas().loadFlipAtlas(atlas_sun);
export const atlas_sun_ex = new Atlas().load([
  atlas_sun_ex_1_path,
  atlas_sun_ex_2_path,
  atlas_sun_ex_3_path,
  atlas_sun_ex_4_path,
  atlas_sun_ex_5_path,
]);
export const atlas_sun_ex_fliped = new Atlas().loadFlipAtlas(atlas_sun_ex);
export const atlas_sun_ex_explode = new Atlas().load([
  atlas_sun_ex_explode_1_path,
  atlas_sun_ex_explode_2_path,
  atlas_sun_ex_explode_3_path,
  atlas_sun_ex_explode_4_path,
  atlas_sun_ex_explode_5_path,
]);
export const atlas_sun_ex_explode_fliped = new Atlas().loadFlipAtlas(
  atlas_sun_ex_explode
);
export const atlas_sun_explode = new Atlas().load([
  atlas_sun_explode_1_path,
  atlas_sun_explode_2_path,
  atlas_sun_explode_3_path,
  atlas_sun_explode_4_path,
  atlas_sun_explode_5_path,
]);
export const atlas_sun_explode_fliped = new Atlas().loadFlipAtlas(
  atlas_sun_explode
);
export const atlas_sun_text = new Atlas().load([
  atlas_sun_text_1_path,
  atlas_sun_text_2_path,
  atlas_sun_text_3_path,
  atlas_sun_text_4_path,
  atlas_sun_text_5_path,
  atlas_sun_text_6_path,
]);
export const atlas_sun_text_fliped = new Atlas().loadFlipAtlas(atlas_sun_text);
export const atlas_sunflower_attack_ex = new Atlas().load([
  atlas_sunflower_attack_ex_1_path,
  atlas_sunflower_attack_ex_2_path,
  atlas_sunflower_attack_ex_3_path,
  atlas_sunflower_attack_ex_4_path,
  atlas_sunflower_attack_ex_5_path,
  atlas_sunflower_attack_ex_6_path,
  atlas_sunflower_attack_ex_7_path,
  atlas_sunflower_attack_ex_8_path,
  atlas_sunflower_attack_ex_9_path,
]);
export const atlas_sunflower_attack_ex_fliped = new Atlas().loadFlipAtlas(
  atlas_sunflower_attack_ex
);
export const atlas_sunflower_die = new Atlas().load([
  atlas_sunflower_die_1_path,
  atlas_sunflower_die_2_path,
]);
export const atlas_sunflower_die_fliped = new Atlas().loadFlipAtlas(
  atlas_sunflower_die
);
export const atlas_sunflower_idle = new Atlas().load([
  atlas_sunflower_idle_1_path,
  atlas_sunflower_idle_2_path,
  atlas_sunflower_idle_3_path,
  atlas_sunflower_idle_4_path,
  atlas_sunflower_idle_5_path,
  atlas_sunflower_idle_6_path,
  atlas_sunflower_idle_7_path,
  atlas_sunflower_idle_8_path,
]);
export const atlas_sunflower_idle_fliped = new Atlas().loadFlipAtlas(
  atlas_sunflower_idle
);
export const atlas_sunflower_run = new Atlas().load([
  atlas_sunflower_run_1_path,
  atlas_sunflower_run_2_path,
  atlas_sunflower_run_3_path,
  atlas_sunflower_run_4_path,
  atlas_sunflower_run_5_path,
]);
export const atlas_sunflower_run_fliped = new Atlas().loadFlipAtlas(
  atlas_sunflower_run
);
export const mp3_bgm_game = loadAudio(mp3_bgm_game_path);
export const mp3_bgm_menu = loadAudio(mp3_bgm_menu_path);
export const mp3_pea_break_1 = loadAudio(mp3_pea_break_1_path);
export const mp3_pea_break_2 = loadAudio(mp3_pea_break_2_path);
export const mp3_pea_break_3 = loadAudio(mp3_pea_break_3_path);
export const mp3_pea_shoot_1 = loadAudio(mp3_pea_shoot_1_path);
export const mp3_pea_shoot_2 = loadAudio(mp3_pea_shoot_2_path);
export const mp3_pea_shoot_ex = loadAudio(mp3_pea_shoot_ex_path);
export const mp3_sun_explode = loadAudio(mp3_sun_explode_path);
export const mp3_sun_explode_ex = loadAudio(mp3_sun_explode_ex_path);
export const mp3_sun_text = loadAudio(mp3_sun_text_path);
export const wav_ui_confirm = loadAudio(wav_ui_confirm_path);
export const wav_ui_switch = loadAudio(wav_ui_switch_path);
export const wav_ui_win = loadAudio(wav_ui_win_path);
