export const getAssetsImageUrl = pathName => {
  try {
    let pngImages = {};
    if (pathName.endsWith(".png")) {
      pngImages = import.meta.glob("@/assets/images/**/*.png", {
        eager: true
      });
    }
    if (pathName.endsWith(".jpeg")) {
      pngImages = import.meta.glob("@/assets/images/**/*.jpeg", {
        eager: true
      });
    }
    if (pathName.endsWith(".jpg")) {
      pngImages = import.meta.glob("@/assets/images/**/*.jpg", {
        eager: true
      });
    }
    if (pathName.endsWith(".webp")) {
      pngImages = import.meta.glob("@/assets/images/**/*.webp", {
        eager: true
      });
    }
    if (pathName.endsWith(".svg")) {
      pngImages = import.meta.glob("@/assets/images/**/*.svg", {
        eager: true
      });
      return pngImages[
        "/src/assets/images" +
          (pathName.indexOf("/") === 0 ? pathName : "/" + pathName)
      ].render;
    }
    console.log(
      "pngImages[\n" +
        '      "/src/assets/images" +\n' +
        '        (pathName.indexOf("/") === 0 ? pathName : "/" + pathName)\n' +
        "    ]",
      pngImages[
        "/src/assets/images" +
          (pathName.indexOf("/") === 0 ? pathName : "/" + pathName)
      ]
    );
    return pngImages[
      "/src/assets/images" +
        (pathName.indexOf("/") === 0 ? pathName : "/" + pathName)
    ].default;
  } catch (error) {
    console.error("GetAssetsImageUrl Not Found " + pathName, error.toString());
    return "";
  }
};
