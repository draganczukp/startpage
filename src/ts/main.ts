interface Links {
	[title: string]: string
};

interface LinkGroup {
	[category: string]: Links;
}

interface Config {
	links: LinkGroup;
}

let config: Config;

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
	config = await (await fetch("/config.json")).json();
	listDiv = document.getElementById("links")! as HTMLDivElement;

	for(let key in config.links)
		createColumns(key);


})();

