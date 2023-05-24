// parcel index.html  파슬사용할때

// import
// nodejs에서 기본적으로 제공하는 전역모듈 path
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
	// 파일을 읽어들이기 시작하는 진입점 설정
	entry: "./js/main.js",

	// 결과물(번들)을 변환하는 과정
	output: {
		// nodejs에서 요구하는 절대경로가 필요함
		// resolve(경로1,경로2) - resolve가 경로를 합쳐서 내어주는 함수
		// dirname-nodejs전역변수, 현재파일이 있는 경로를 지칭함
		// path: path.resolve(__dirname, "dist"),
		// entry파일이름과 같이 지정
		// filename: "main.js",
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.s?css$/, // .css확장자로 끝나는 파일을 찾아라
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], // 순서 중요.
			},
			{
				test: /\.js$/,
				use: ["barbel-loader"],
			},
		],
	},

	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
	plugins: [
		new HtmlPlugin({
			// new 생성자함수의 반환된 결과값이 plugins의 첫번째 배열로 들어간다.
			template: "./index.html",
		}),
		new CopyPlugin({
			patterns: [{ from: "static" }],
		}),
	],

	devServer: {
		host: "localhost",
	},
};
