import { Atlas } from "../object/Atlas";
import { flipImage, loadAudio, loadFont, loadImage } from "../utils";

/**
 * 资源描述
 *
 * 这里这样写是为了实现根据资源名称来获取资源，
 * 这样后面也许可以用原型模式来设计角色
 */
const resource_descriptions = {
  images: [
    {
      name: "1P",
      path: "/assets/1P.png",
    },
    {
      name: "1P_cursor",
      path: "/assets/1P_cursor.png",
    },
    {
      name: "1P_desc",
      path: "/assets/1P_desc.png",
    },
    {
      name: "1P_selector_btn_down",
      path: "/assets/1P_selector_btn_down.png",
    },
    {
      name: "1P_selector_btn_idle",
      path: "/assets/1P_selector_btn_idle.png",
    },
    {
      name: "1P_winner",
      path: "/assets/1P_winner.png",
    },
    {
      name: "2P",
      path: "/assets/2P.png",
    },
    {
      name: "2P_cursor",
      path: "/assets/2P_cursor.png",
    },
    {
      name: "2P_desc",
      path: "/assets/2P_desc.png",
    },
    {
      name: "2P_selector_btn_down",
      path: "/assets/2P_selector_btn_down.png",
    },
    {
      name: "2P_selector_btn_idle",
      path: "/assets/2P_selector_btn_idle.png",
    },
    {
      name: "2P_winner",
      path: "/assets/2P_winner.png",
    },
    {
      name: "avatar_peashooter",
      path: "/assets/avatar_peashooter.png",
    },
    {
      name: "avatar_sunflower",
      path: "/assets/avatar_sunflower.png",
    },
    {
      name: "gravestone",
      path: "/assets/gravestone.png",
    },
    {
      name: "hills",
      path: "/assets/hills.png",
    },
    {
      name: "menu_background",
      path: "/assets/menu_background.png",
    },
    {
      name: "pea",
      path: "/assets/pea.png",
    },
    {
      name: "peashooter_selector_background",
      path: "/assets/peashooter_selector_background.png",
    },
    {
      name: "platform_large",
      path: "/assets/platform_large.png",
    },
    {
      name: "platform_small",
      path: "/assets/platform_small.png",
    },
    {
      name: "selector_background",
      path: "/assets/selector_background.png",
    },
    {
      name: "selector_tip",
      path: "/assets/selector_tip.png",
    },
    {
      name: "sky",
      path: "/assets/sky.png",
    },
    {
      name: "sunflower_selector_background",
      path: "/assets/sunflower_selector_background.png",
    },
    {
      name: "VS",
      path: "/assets/VS.png",
    },
    {
      name: "winnner_bar",
      path: "/assets/winnner_bar.png",
    },
  ],
  atlas: [
    {
      name: "jump_effect",
      paths: ["/assets/jump_effect_1.png", "/assets/jump_effect_2.png", "/assets/jump_effect_3.png", "/assets/jump_effect_4.png", "/assets/jump_effect_5.png"],
    },
    {
      name: "land_effect",
      paths: ["/assets/land_effect_1.png", "/assets/land_effect_2.png"],
    },
    {
      name: "pea_break",
      paths: ["/assets/pea_break_1.png", "/assets/pea_break_2.png", "/assets/pea_break_3.png"],
    },
    {
      name: "peashooter_attack_ex",
      paths: ["/assets/peashooter_attack_ex_1.png", "/assets/peashooter_attack_ex_2.png", "/assets/peashooter_attack_ex_3.png"],
    },

    {
      name: "peashooter_die",
      paths: ["/assets/peashooter_die_1.png", "/assets/peashooter_die_2.png", "/assets/peashooter_die_3.png", "/assets/peashooter_die_4.png"],
    },

    {
      name: "peashooter_idle",
      paths: [
        "/assets/peashooter_idle_1.png",
        "/assets/peashooter_idle_2.png",
        "/assets/peashooter_idle_3.png",
        "/assets/peashooter_idle_4.png",
        "/assets/peashooter_idle_5.png",
        "/assets/peashooter_idle_6.png",
        "/assets/peashooter_idle_7.png",
        "/assets/peashooter_idle_8.png",
        "/assets/peashooter_idle_9.png",
      ],
    },
    {
      name: "peashooter_run",
      paths: ["/assets/peashooter_run_1.png", "/assets/peashooter_run_2.png", "/assets/peashooter_run_3.png", "/assets/peashooter_run_4.png", "/assets/peashooter_run_5.png"],
    },
    {
      name: "run_effect",
      paths: ["/assets/run_effect_1.png", "/assets/run_effect_2.png", "/assets/run_effect_3.png", "/assets/run_effect_4.png"],
    },
    {
      name: "sun",
      paths: ["/assets/sun_1.png", "/assets/sun_2.png", "/assets/sun_3.png", "/assets/sun_4.png", "/assets/sun_5.png"],
    },
    {
      name: "sun_ex",
      paths: ["/assets/sun_ex_1.png", "/assets/sun_ex_2.png", "/assets/sun_ex_3.png", "/assets/sun_ex_4.png", "/assets/sun_ex_5.png"],
    },
    {
      name: "sun_ex_explode",
      paths: ["/assets/sun_ex_explode_1.png", "/assets/sun_ex_explode_2.png", "/assets/sun_ex_explode_3.png", "/assets/sun_ex_explode_4.png", "/assets/sun_ex_explode_5.png"],
    },
    {
      name: "sun_explode",
      paths: ["/assets/sun_explode_1.png", "/assets/sun_explode_2.png", "/assets/sun_explode_3.png", "/assets/sun_explode_4.png", "/assets/sun_explode_5.png"],
    },
    {
      name: "sun_text",
      paths: ["/assets/sun_text_1.png", "/assets/sun_text_2.png", "/assets/sun_text_3.png", "/assets/sun_text_4.png", "/assets/sun_text_5.png", "/assets/sun_text_6.png"],
    },
    {
      name: "sunflower_attack_ex",
      paths: [
        "/assets/sunflower_attack_ex_1.png",
        "/assets/sunflower_attack_ex_2.png",
        "/assets/sunflower_attack_ex_3.png",
        "/assets/sunflower_attack_ex_4.png",
        "/assets/sunflower_attack_ex_5.png",
        "/assets/sunflower_attack_ex_6.png",
        "/assets/sunflower_attack_ex_7.png",
        "/assets/sunflower_attack_ex_8.png",
        "/assets/sunflower_attack_ex_9.png",
      ],
    },
    {
      name: "sunflower_die",
      paths: ["/assets/sunflower_die_1.png", "/assets/sunflower_die_2.png"],
    },
    {
      name: "sunflower_idle",
      paths: [
        "/assets/sunflower_idle_1.png",
        "/assets/sunflower_idle_2.png",
        "/assets/sunflower_idle_3.png",
        "/assets/sunflower_idle_4.png",
        "/assets/sunflower_idle_5.png",
        "/assets/sunflower_idle_6.png",
        "/assets/sunflower_idle_7.png",
        "/assets/sunflower_idle_8.png",
      ],
    },
    {
      name: "sunflower_run",
      paths: ["/assets/sunflower_run_1.png", "/assets/sunflower_run_2.png", "/assets/sunflower_run_3.png", "/assets/sunflower_run_4.png", "/assets/sunflower_run_5.png"],
    },
  ],
  audios: [
    {
      name: "bgm_game",
      path: "/assets/bgm_game.mp3",
    },
    {
      name: "bgm_menu",
      path: "/assets/bgm_menu.mp3",
    },
    {
      name: "pea_break_1",
      path: "/assets/pea_break_1.mp3",
    },
    {
      name: "pea_break_2",
      path: "/assets/pea_break_2.mp3",
    },
    {
      name: "pea_break_3",
      path: "/assets/pea_break_3.mp3",
    },
    {
      name: "pea_shoot_1",
      path: "/assets/pea_shoot_1.mp3",
    },
    {
      name: "pea_shoot_2",
      path: "/assets/pea_shoot_2.mp3",
    },
    {
      name: "pea_shoot_ex",
      path: "/assets/pea_shoot_ex.mp3",
    },
    {
      name: "sun_explode",
      path: "/assets/sun_explode.mp3",
    },
    {
      name: "sun_explode_ex",
      path: "/assets/sun_explode_ex.mp3",
    },
    {
      name: "sun_text",
      path: "/assets/sun_text.mp3",
    },
    {
      name: "ui_confirm",
      path: "./assets/ui_confirm.wav",
    },
    {
      name: "ui_switch",
      path: "./assets/ui_switch.wav",
    },
    {
      name: "ui_win",
      path: "./assets/ui_win.wav",
    },
  ],
  fonts: [
    {
      name: "IPix",
      path: "url(./assets/IPix.ttf)",
    },
  ],
};

// 异步加载资源
async function loadResources() {
  const resource = {
    images: new Map<string, HTMLImageElement>(),
    atlas: new Map<string, Atlas>(),
    audios: new Map<string, HTMLAudioElement>(),
    fonts: new Map<string, FontFace>(),
  };
  console.log("load resources");
  async function loadImages() {
    for (let index = 0; index < resource_descriptions.images.length; index++) {
      const image = resource_descriptions.images[index];
      resource.images.set(image.name, await loadImage(image.path));
      resource.images.set(image.name + "_left", await loadImage(image.path));
      resource.images.set(image.name + "_right", flipImage(await loadImage(image.path)));
    }
    console.log("load images done");
  }
  async function loadAudios() {
    for (let index = 0; index < resource_descriptions.audios.length; index++) {
      const audio = resource_descriptions.audios[index];
      resource.audios.set(audio.name, await loadAudio(audio.path));
    }
    console.log("load audio done");
  }
  async function loadAtlas() {
    for (let index = 0; index < resource_descriptions.atlas.length; index++) {
      const atlas = resource_descriptions.atlas[index];
      resource.atlas.set(atlas.name, await Atlas.load(atlas.paths));
      resource.atlas.set(atlas.name + "_left", await Atlas.load(atlas.paths));
      resource.atlas.set(atlas.name + "_right", await Atlas.loadFlipAtlas(atlas.paths));
    }
    console.log("load atlas done");
  }
  async function loadFonts() {
    for (let index = 0; index < resource_descriptions.fonts.length; index++) {
      const font = resource_descriptions.fonts[index];
      resource.fonts.set(font.name, await loadFont(font.name, font.path));
    }
  }
  // 多线程同时加载资源
  await Promise.all([loadImages(), loadAudios(), loadAtlas(), loadFonts()]);
  console.log("load resources done");
  return resource;
}

// 导出资源
export const resources = await loadResources();
