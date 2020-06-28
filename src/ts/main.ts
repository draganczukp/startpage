interface Links {
	[title: string]: string
};

interface LinkGroup {
	[category: string]: Links;
}

interface Config {
	links: LinkGroup;
}

const config = {
	"links": {
		"Fun": {
			"YouTube": "https://youtube.com/feed/subscriptions",
			"Netflix": "https://netflix.com",
			"Reddit": "https://reddit.com",
			"Twitter": "https://twitter.com",
			"Imgut": "https://imgur.com"
		},
		"Misc": {
			"GMail": "https://mail.google.com",
			"Cloud": "https://cloud.draganczuk.tk",
			"Migadu": "https://webmail.migadu.com",
			"Messenger": "https://messenger.com"
		},
		"Studia": {
			"Materiały": "https://url.draganczuk.tk/materialy",
			"Plan": "http://www.plan.uz.zgora.pl/grupy_plan.php?pId_Obiekt=21422",
			"Studnet": "https://webapps.uz.zgora.pl/studnet/",
			"Classroom": "https://classroom.google.com/u/1/h"
		},
		"Dev": {
			"Github": "https://github.com/",
			"Hosting": "https://cloud.hetzner.com/",
			"Docker": "https://hub.docker.com"
		}
	}
};

let listDiv: HTMLDivElement;

const createColumnDiv = (): HTMLDivElement => {
	const elt: HTMLDivElement = document.createElement("div");
	elt.classList.add("link-list");
	return elt;
}

const createColumnHeader = (text: string) => {
	const elt: HTMLHeadingElement = document.createElement("h3");
	elt.innerText = text;
	return elt;
}

const createList = (links: Links): HTMLUListElement => {

	const list: HTMLUListElement = document.createElement("ul");

	for(const link in links){
		let li = document.createElement("li");
		li.innerHTML = `<a href="${links[link]}">${link}</a>`;
		list.appendChild(li);
	}

	return list;
}

const createColumns = (key: string) => {
	const column = createColumnDiv();
	const header = createColumnHeader(key);
	const list = createList(config.links[key]);

	column.appendChild(header);
	column.appendChild(list);
	listDiv.appendChild(column);
}

(async ()=>{
	listDiv = document.getElementById("links")! as HTMLDivElement;

	let keys: string[] = [];

	for(let key in config.links)
		createColumns(key);


})();

