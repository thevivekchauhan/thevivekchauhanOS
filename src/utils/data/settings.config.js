import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";
import wallpaper1 from "../../assets/images/wallpapers/wallpaper1.jpg";
import wallpaper2 from "../../assets/images/wallpapers/wallpaper2.jpg";
import wallpaper3 from "../../assets/images/wallpapers/wallpaper3.jpg";
import bannerImage from "../../assets/images/baseImages/banner.png";

const settings = {
	desktop_wallpapers: [
		{
			id: "default_wall",
			value: bannerImage,  // Use imported image
		},
		{
			id: "wall_1",
			value: wallpaper1,
		},
		{
			id: "wall_2",
			value: wallpaper2,
		},
		{
			id: "wall_3",
			value: wallpaper3,
		},
	],
	default_wallpaper: bannerImage,  // Use imported image
};

export default settings;
