// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		section: "ChillGG Battles",
	},
	{
		name: "[Gen 8] Wonky Free-For-All",
		mod: 'gen8',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Sleep Clause Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		banlist: ['All Items'],
		unbanlist: ['All Abilities', 'All Pokemon', 'Nonexistent'],
	},
];