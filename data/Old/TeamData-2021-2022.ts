/**
 * Data for all QTMA members
 */

const getImage = (name: string) => `/assets/Members/2021-2022/${name}.png`;

enum Positions {
	CoChair,
	SeniorDeveloper,
	Developer,
	Advisor,
	ProductManager,
	ProductMarketingManager,
	UIUX,
	SeniorBA,
	BA,
	Operations,
	FroshRep,
	WebDev,
}

interface IClubMember {
	image: string;
	name: string;
	position: Positions;
	subPosition: string;
	linkedIn: string;
}

const ClubMembers: IClubMember[] = [
	{
		image: getImage("Mudra"),
		name: "Mudra Patel",
		position: Positions.CoChair,
		subPosition: "Product Lead",
		linkedIn: "https://www.linkedin.com/in/mudrapatel/"
	},
	{
		image: getImage("Aman"),
		name: "Aman Dhaliwal",
		position: Positions.CoChair,
		subPosition: "Development Lead",
		linkedIn: "https://www.linkedin.com/in/amandhaliwal44/"
	},
	{
		image: getImage("Kevin_Ding"),
		name: "Kevin Ding",
		position: Positions.CoChair,
		subPosition: "Business Lead",
		linkedIn: "https://www.linkedin.com/in/kevding/"
	},
	{
		image: getImage("Alice"),
		name: "Alice Qi",
		position: Positions.CoChair,
		subPosition: "Business Lead",
		linkedIn: "https://www.linkedin.com/company/queen's-technology-and-media-association/mycompany/"
	},
	{
		image: getImage("Truman_Be"),
		name: "Truman Be",
		position: Positions.SeniorDeveloper,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/truman-be/"
	},
	{
		image: getImage("Ben_Minor"),
		name: "Ben Minor",
		position: Positions.SeniorDeveloper,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/ben-minor/"
	},
	{
		image: getImage("Kevin_Quijalvo"),
		name: "Kevin Quijalvo",
		position: Positions.SeniorDeveloper,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/marc-quijalvo/"
	},
	{
		image: getImage("Emily_Zhao"),
		name: "Emily Zhao",
		position: Positions.SeniorDeveloper,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/emily-zhaoo/"
	},
	{
		image: getImage("Ronan_Almeida"),
		name: "Ronan Almeida",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/ronanalmeida/"
	},
	{
		image: getImage("Connor_Colwill"),
		name: "Connor Colwill",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/connorcolwill/"
	},
	{
		image: getImage("Isabella_Enriquez"),
		name: "Isabella Enriquez",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/isabellaenriquez/"
	},
	{
		image: getImage("Lexi_Locca"),
		name: "Lexi Locca",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/company/queen's-technology-and-media-association/mycompany/"
	},
	{
		image: getImage("Jessica_Li"),
		name: "Jessica Li",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/jessica-a-li/"
	},
	{
		image: getImage("Kevin_Liang"),
		name: "Kevin Liang",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/kevin-liang-32b9791aa/"
	},
	{
		image: getImage("Matthew_MacEachern"),
		name: "Matthew MacEachern",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/matthew-maceachern/"
	},
	{
		image: getImage("Lia_Mason"),
		name: "Lia Mason",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/lia-k-mason/"
	},
	{
		image: getImage("Reid"),
		name: "Reid Moffat",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/reid-moffat/"
	},
	{
		image: getImage("Khoa_Nguyen"),
		name: "Khoa Nguyen",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/khoa-nguyen-438a5417a/"
	},
	{
		image: getImage("Grady_Palfrey"),
		name: "Grady Palfrey",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/gradypalfrey/"
	},
	{
		image: getImage("Kevin_Subagaren"),
		name: "Kevin Subagaran",
		position: Positions.Developer,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/kevin-s-a76b741b0/"
	},
	{
		image: getImage("Mark_Gragtmans"),
		name: "Mark Gragtmans",
		position: Positions.Advisor,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/mark-gragtmans/"
	},
	{
		image: getImage("Arsh_Kochhar"),
		name: "Arsh Kochhar",
		position: Positions.Advisor,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/arshkochhar/"
	},
	{
		image: getImage("Jason"),
		name: "Jason Yang",
		position: Positions.Advisor,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/jason-z-yang/"
	},
	{
		image: getImage("Zaais_Van_Zyl"),
		name: "Zaais Van Zyl",
		position: Positions.Advisor,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/zaais-van-zyl/"
	},
	{
		image: getImage("Richard"),
		name: "Richard Li",
		position: Positions.ProductManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/richardliqu/"
	},
	{
		image: getImage("Ethan"),
		name: "Ethan Bonnardeaux",
		position: Positions.ProductManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/ethan-bonnardeaux/"
	},
	{
		image: getImage("Julien_Lin"),
		name: "Julien Lin",
		position: Positions.ProductManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/julien-lin/"
	},
	{
		image: getImage("Riya_Shah"),
		name: "Riya Shah",
		position: Positions.ProductManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/riya-shah-queens-university/"
	},
	{
		image: getImage("Vicky_Deng"),
		name: "Vicky Deng",
		position: Positions.ProductMarketingManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/dengvicky/"
	},
	{
		image: getImage("Chloe_Hung"),
		name: "Chloe Hung",
		position: Positions.ProductMarketingManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/chloe-hung/"
	},
	{
		image: getImage("Eesha_Kohli"),
		name: "Eesha Kohli",
		position: Positions.ProductMarketingManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/eesha-kohli/"
	},
	{
		image: getImage("Helen_Xu"),
		name: "Helen Xu",
		position: Positions.ProductMarketingManager,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/helencxu/"
	},
	{
		image: getImage("Flora_Lin"),
		name: "Flora Lin",
		position: Positions.UIUX,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/~flora/"
	},
	{
		image: getImage("Graham_Carkner"),
		name: "Graham Carkner",
		position: Positions.UIUX,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/gcarkner/"
	},
	{
		image: getImage("Randy_Shao"),
		name: "Randy Shao",
		position: Positions.UIUX,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/randyshao/"
	},
	{
		image: getImage("Doris_Zhuo"),
		name: "Doris Zhuo",
		position: Positions.UIUX,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/doris-zhuo/"
	},
	{
		image: getImage("Dylan_Ratti"),
		name: "Dylan Ratti",
		position: Positions.SeniorBA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/dylan-ratti/"
	},
	{
		image: getImage("Aaron_Chen"),
		name: "Aaron Chen",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/aaron-chen-44306b135/"
	},
	{
		image: getImage("David_Choo"),
		name: "David Choo",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/david-j-choo/"
	},
	{
		image: getImage("Mahir_Hamid"),
		name: "Mahir Hamid",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/mahirhamid/"
	},
	{
		image: getImage("Naomi"),
		name: "Naomi Junatas",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/naomijunatas/"
	},
	{
		image: getImage("Chris_Power"),
		name: "Chris Power",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/chris-power-canada/"
	},
	{
		image: getImage("Kevin_Wu"),
		name: "Kevin Wu",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/wu-kevin/"
	},
	{
		image: getImage("Jacob_Xu"),
		name: "Jacob Xu",
		position: Positions.BA,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/jacobx/"
	},
	{
		image: getImage("Dene"),
		name: "Dene Bezuidenhout",
		position: Positions.Operations,
		subPosition: "Marketing",
		linkedIn: "https://www.linkedin.com/in/denebezuidenhout/"
	},
	{
		image: getImage("Sola_Ebina"),
		name: "Sola Ebina",
		position: Positions.Operations,
		subPosition: "Marketing",
		linkedIn: "https://www.linkedin.com/in/solaebina/"
	},
	{
		image: getImage("Allen_Chen"),
		name: "Allen Chen",
		position: Positions.Operations,
		subPosition: "Internal Affairs",
		linkedIn: "https://www.linkedin.com/in/allen-chen0/"
	},
	{
		image: getImage("Benny_Lam"),
		name: "Benny Lam",
		position: Positions.Operations,
		subPosition: "Sponsorships",
		linkedIn: "https://www.linkedin.com/in/bennylam116/"
	},
	{
		image: getImage("Catherine_Pham"),
		name: "Catherine Pham",
		position: Positions.Operations,
		subPosition: "Sponsorships",
		linkedIn: "https://www.linkedin.com/in/catherinepham123/"
	},
	{
		image: getImage("Krishaan"),
		name: "Krishaan Thyagarajan",
		position: Positions.FroshRep,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/krishaan-thyagarajan/"
	},
	{
		image: getImage("Egor"),
		name: "Egor Petrov",
		position: Positions.FroshRep,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/egorpetrov1402/"
	},
	{
		image: getImage("Manush"),
		name: "Manush Patel",
		position: Positions.FroshRep,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/manushpatel/"
	},
	{
		image: getImage("Olivia_Xu"),
		name: "Olivia Xu",
		position: Positions.FroshRep,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/olivia-xu-057a27171/"
	},
	{
		image: getImage("Kevin_Yu"),
		name: "Kevin Yu",
		position: Positions.WebDev,
		subPosition: "",
		linkedIn: "https://www.linkedin.com/in/kevin-yu-246147199/"
	},
]

export {Positions, ClubMembers};
