// clans.js — Sangue & Safira Campaign Companion
// Content based on Vampire: The Masquerade V5 official material
// (Players Guide & Corebook)

const clans = [
  {
    id: "banu-haqim",
    nome: "Banu Haqim",
    alcunhas: ["The Clan of the Hunt", "Children of Haqim", "Mediators", "Judges"],
    simbolo: "⬡",
    cor: "#8B0000",
    citacao: "Your Blood has found you wanting, but I'm sure I can find a suitable purpose for it.",
    resumo: "The Judges of the Banu Haqim are torn between their hereditary thirst for vampiric Blood and their passion for justice. Stern adjudicators fiercely devoted to upholding a moral code, they Embrace mortals capable of assessing and handling threats, enforcing laws and traditions, and punishing transgressors.",
    historia: "The Blood is a law unto itself from the Banu Haqim perspective, communicating a sense of duty to those who bear it in addition to the curse of forever standing guard against the Beast. Banu Haqim from all cultures and legal traditions in life find that their Blood binds them to stringency and honor. They gravitate toward an orderly society — by their reasoning, the Damned need structure lest they lose themselves to their baser urges and domains become blood-spattered hellscapes. A common motif among the Banu Haqim is a tripartite lineage consisting of judges, blood-sorcerers, and killers-of-killers. The most renowned lineages have pledged themselves to the Camarilla, though pragmatic Judges favor whatever institution best serves justice in a given domain.",
    disciplinas: [
      {
        nome: "Blood Sorcery",
        descricao: "Various Haqimite methods and philosophies regarding Blood Sorcery inflect the practical applications of the Discipline, from providing its practitioners murderous abilities to more versatile ritual aspects, gleaning secrets from their own Blood and others'."
      },
      {
        nome: "Celerity",
        descricao: "The Children of Haqim use Celerity to terrifying effect. Many are skilled in its use before all other Disciplines, to rely on speed of judgment before doubt can slow a blade to the throat."
      },
      {
        nome: "Obfuscate",
        descricao: "Banu Haqim stalk their prey unseen, whether as a means to feed discreetly or deliver final death to a target without the needless risks of going toe-to-toe. Some employ this Discipline to observe a target performing an act of transgression before delivering judgment."
      }
    ],
    perdicao: "Banu Haqim are drawn to feed from those deserving punishment — especially vampire Blood, the very essence of transgression. When one of the Judges tastes the Blood of another Cainite, they find it very hard to stop. Slaking at least one Hunger level with vampiric vitae provokes a hunger frenzy test at Difficulty 2 + Bane Severity. If the test is failed they attempt to gorge themselves on vampire Blood, sometimes until they perform diablerie upon their Kindred victim.",
    fome: {
      nome: "Judgment",
      descricao: "The vampire is compelled to punish anyone seen to transgress against their personal code, taking their blood as just vengeance for the crime. For one scene, the vampire must slake at least one Hunger from anyone, friend or foe, who acts against a Conviction of theirs. Failing to do so results in a three-dice penalty to all rolls until the Compulsion is satisfied or the scene ends."
    }
  },

  {
    id: "brujah",
    nome: "Brujah",
    alcunhas: ["The Learned Clan", "Rabble", "Punks", "Hipsters", "Prometheans", "Rebels", "Philosopher-Kings", "Hellenes"],
    simbolo: "⊘",
    cor: "#CC2200",
    citacao: "The dream of the learned clan is a world where all injustice has been eliminated and the living and the undead can coexist in peace.",
    resumo: "The dream of the learned clan is a world where all injustice has been eliminated. They say it is for love of the mortals that they lead them against their masters. In truth, they may simply rage against a distant or non-existent God they can never fight, against a curse they can never end. Theirs is a dream that poisons everything it touches.",
    historia: "Clan Brujah have always Embraced from the ranks of those sympathetic to counterculture and revolution. They seek out allies who question normative ideas, and recognizing the fire of the oppressed, they gravitate toward the underdog. Common perception places punks, gang-members, maladjusted immigrants, and rioters among the Brujah. While the clan includes substantial numbers of vocal outsiders, their desire for rebellion reaches as deep as the fraudster ripping off his own company, or the lawyer representing the poor pro bono. The philosophical Brujah, known as Hellenes, believe the best method of dismantling the establishment is to understand the social and cultural systems that allow it to exist in the first place.",
    disciplinas: [
      {
        nome: "Celerity",
        descricao: "Brujah use Celerity to strike fast and escape uprisings they have started. They hunt with it to snatch vessels from the streets, feeding from them savagely, or to rapidly dispose of a mortal before vanishing into the night."
      },
      {
        nome: "Potence",
        descricao: "Brujah use Potence as a devastating weapon, cutting short any confrontation with destructive finality. Though the clan preaches a connection to humanity, its members often take what they want by force."
      },
      {
        nome: "Presence",
        descricao: "Brujah use Presence to win the hearts of the crowd, turn a threatening mob against itself, or send a dangerous opponent fleeing into the night. Brujah intellectuals prefer feeding with Presence to convince vessels to give up their blood voluntarily."
      }
    ],
    perdicao: "The Blood of the Brujah simmers with barely contained rage, exploding at the slightest provocation. Subtract dice equal to the Bane Severity of the Brujah from any roll to resist fury frenzy. This cannot take the pool below one die.",
    fome: {
      nome: "Rebellion",
      descricao: "When a Brujah suffers a Compulsion, they must speak out against or actively resist the most prominent authority figure in the scene. Any action that does not somehow resist, undermine, or defy authority costs the Brujah a two-dice penalty until the Compulsion is satisfied."
    }
  },

  {
    id: "gangrel",
    nome: "Gangrel",
    alcunhas: ["The Clan of the Beast", "Animals", "Ferals", "Savages", "Barbarians", "Outcasts", "Wolves", "Strays"],
    simbolo: "🐺",
    cor: "#5C4033",
    citacao: "When other Kindred curse their appetites and choose the gilded cage of the city and the leash of social hierarchy, the wolves accept the Beast as a part of themselves and run free.",
    resumo: "A hunger older than mankind burns inside the wolves. Crossing borders between species, nations, and domains with the ease of perfect predators, they belong to the wild and the wild belongs to them. Trading stories of war and the secret histories of their kind around campfires lit with the bones of their oppressors, they have turned their backs on the Camarilla.",
    historia: "Clan Gangrel are outcasts, wanderers, rogues, and hunters. They make havens in the poorest parts of the city and feel no shame for doing so. They claim few domains as their own but defer to no prince. Gangrel Embrace from the ranks of survivors and fighters: leaders of prison crews and gangs, explorers, and any kine who sees the world as something to traverse instead of something to hide from. They care not for looks or title, but for accomplishment and reputation. Any mortal capable of projecting their will onto others, leading a group from disaster to success, or fighting impossible odds draws the clan's attention.",
    disciplinas: [
      {
        nome: "Animalism",
        descricao: "A Gangrel can use Animalism to take on an animal companion, sometimes called a famulus. The animal companion can be used for hunting, spying, and attacking. Some Gangrel will turn pets on their owners, hound vagrants with packs of dogs, or lure strays to them for a quick feeding."
      },
      {
        nome: "Fortitude",
        descricao: "As longtime bodyguards and soldiers for the other clans, the Gangrel have benefited hugely from Fortitude. The Discipline can give them a sense of fearlessness, as it allows them to hunt across harsh terrain and take bullets and knife blades without worry."
      },
      {
        nome: "Protean",
        descricao: "Gangrel are known for their mastery of Protean, as few other clans possess its gifts. Straddling the line between vampirism and shapeshifting, the Discipline allows a Gangrel to take on the physical properties of another creature, or in other ways change their physical shape."
      }
    ],
    perdicao: "Gangrel relate to their Beast much as other Kindred relate to the Gangrel: suspicious partnership. In frenzy, Gangrel gain one or more animal features: a physical trait, a smell, or a behavioral tic. These features last for one more night afterward. Each feature reduces one Attribute by 1 point. The number of features a Gangrel manifests equals their Bane Severity.",
    fome: {
      nome: "The Wild",
      descricao: "When a Gangrel suffers a Compulsion, the call of the wild becomes overwhelming. The vampire must move to be alone or in nature and can only hunt using predatory animal instinct. Any social actions that are not predatory in nature cost a two-dice penalty until the Compulsion is satisfied."
    }
  },

  {
    id: "hecata",
    nome: "Hecata",
    alcunhas: ["Necromancers", "Devil-Kindred", "Lazarenes", "The Clan of Death"],
    simbolo: "☠",
    cor: "#2E4A3E",
    citacao: "The Kindred are simply one expression of death, a still-vital consciousness clad in a flesh of fading lividity, or even vitality… and such expressions can be reinterpreted, as it were.",
    resumo: "A motley collection of necromantic vampire bloodlines, the Hecata clan are united in the pursuit of a single subject: Death. They are students of the afterlife and resurrectionists of the dead — or worse. Selling their services to the highest bidder, there are few who can hide from the surveillance of those who can summon and command the very spirits of the deceased.",
    historia: "The Hecata are anomalous among the Kindred clans, in that they are practically a sect unto themselves, a clan consisting of strange bloodlines and even some genuine familial ties, all built upon the reverence of and occasional subjugation of death itself. Comprising everything from ancestor-worshiping Old World crime families to effigy-wielding priests to degenerate flesh-eating monsters, the Hecata clan has an unwholesome fascination with the mortal coil in common among its member bloodlines. A morbid ritual recently bound together these disparate consanguinities into a 'united' clan proper. Hecata subscribe to a cyclical philosophy in regards to the Embrace, which they symbolize by the three faces of Death, Rot, and Rebirth.",
    disciplinas: [
      {
        nome: "Auspex",
        descricao: "Hecata often regard Auspex as perception of fate. Reading an aura becomes an exercise in discerning how the individual's attitudes steer them toward their fate. It's also a Discipline that requires a degree of finesse, from sensing unseen ghosts to reading the spiritual history of an object."
      },
      {
        nome: "Fortitude",
        descricao: "Who better to exalt the physical durability of the undead form? Fortitude may manifest as the futility of hacking away at an already-dead corpse to a grand mastery over — and avoidance of — Death's very laws."
      },
      {
        nome: "Oblivion",
        descricao: "Oblivion is among the most mysterious of Disciplines, as it can reach past the veil of the afterlife. Through its use, the Hecata might interrogate a ghost or set it to torment a rival. They might rot a mortal's flesh with a touch or drive a meddling kine to a bleak reward."
      }
    ],
    perdicao: "The Hecata inflict a notoriously painful Kiss. The fangs of the Lazarenes bring not bliss, but agony. Victims caught unawares will violently resist unless restrained, and few people submit willingly. When drinking directly from a victim, Hecata may only take harmful drinks, resulting in blood loss. Even those coerced or willing must succeed in a Stamina + Resolve test against Difficulty 2 + Bane Severity in order not to strain against the pain.",
    fome: {
      nome: "Morbidity",
      descricao: "The vampire experiences an immediate need to move something from life to death or vice versa. Any action not dedicated to ending or resurrecting something is taken at a two-dice penalty. This subject doesn't have to be a person, or even a living thing, but can include objects or even more abstract things such as an idea or a conversation. The Compulsion lasts until the vampire manages to kill or return something to life."
    }
  },

  {
    id: "lasombra",
    nome: "Lasombra",
    alcunhas: ["The Clan of Night", "Magisters", "Keepers", "Shadows"],
    simbolo: "♛",
    cor: "#1A0A2E",
    citacao: "For certain, I am ever your ally, but I must resign myself to the shadows, otherwise they'll know the true threat our combined might presents.",
    resumo: "Creatures subtly at odds with mundane reality, Lasombra vampires are expected to triumph at any cost. Ruthlessness is a sought-after trait in progeny, making their reputation as betraying interlopers well deserved. Most do not seek attention, preferring to act as puppeteers, powers behind the proverbial throne. To a Shadow, the ends justify any means.",
    historia: "From the shadows, the Keepers orchestrate their schemes, pulling the strings of 'lesser' Kindred, manipulating them as they would marionettes on strings, enacting the shadow-play of the Eternal Struggle. Lasombra greatly esteem accomplishment, especially in matters by which they might gain power over others. They do not enjoy risk, and Keepers have quite rightly earned a reputation for shrewd planning and cold calculation. Historically, the Lasombra have influenced every sect: early rebels in the Anarch Revolt, warlords of the Sabbat in the Americas, and redoubtable recruits into the Camarilla during this modern era of the Second Inquisition.",
    disciplinas: [
      {
        nome: "Dominate",
        descricao: "The Lasombra rely on their ability to crush wills and command obedience without the genteel affectations to which some of the Damned pretend. The callous way in which they exert this Discipline on victims often earns antipathy from other Kindred, yet few deny the Magisters' ability in brainwashing and subjugating prey."
      },
      {
        nome: "Oblivion",
        descricao: "The ability to manipulate shadows allows the Lasombra to observe, strike, and escape without ever having to confront their victim, or to employ entities darker than death for the same purpose. Many claim there's a cost to one's soul for using Oblivion, or that overindulging it is why the Lasombra appear strangely in reflections and modern media formats."
      },
      {
        nome: "Potence",
        descricao: "When forced to resort to physical violence, Magisters may favor popping an enemy's skull with their hands, driving a boot through a punk's stomach, or ripping a door off its hinges to command respect and fear. Few Lasombra use Potence for feeding, considering it a vulgar exercise to manually grab and hold a vessel."
      }
    ],
    perdicao: "Anyone seeing the reflection or recording of a Lasombra vampire can instantly recognize them for what they are, provided they know what they're looking for. In addition, use of modern communication technology, including making a simple phone call, requires a Technology test at Difficulty 2 + Bane Severity as microphones have similar problems with the voice of a Lasombra as cameras with their image. Avoiding electronic vampire detection systems is also done at a penalty equal to Bane Severity.",
    fome: {
      nome: "Ruthlessness",
      descricao: "Lasombra despise failure, associating it with poor planning or a personal declivity. When affected by this compulsion, their Blood urges them toward any act conceivable to reach their goals. The next time the vampire fails any action they receive a two-dice penalty to any and all rolls until a future attempt at the same action succeeds, or the scene ends."
    }
  },

  {
    id: "malkavian",
    nome: "Malkavian",
    alcunhas: ["The Clan of the Moon", "Lunatics", "Madmen", "Jesters", "Oracles", "Dervishes", "Visionaries", "Children of Malkav"],
    simbolo: "☽",
    cor: "#4A0E6E",
    citacao: "We're not clowns, Jeanette. We're not here to amuse the other Kindred.",
    resumo: "Psychologists would diagnose the children of Malkav with schizophrenia, depression, obsessive compulsive disorder, or post-traumatic stress disorder. In reality, they have all of these things and none. Like the 'wise madmen' of poetry their derangement stems from seeing too much of the world at once, from understanding too deeply, and feeling emotions that are too strong to bear.",
    historia: "It has long been the misconception that few Kindred families are as disparate as the Clan of the Moon. Other clans see them and reason, 'they are each mad, so why should their respective origins matter?' To the Malkavians, origins matter a great deal. One of the gifts the Malkavians look for in a mortal is 'second sight' — the ability to interpret dreams, perceive spirits, or unerringly predict future events. They are also fascinated by the 'broken' — individuals who have been changed by traumatic experiences. Some Malkavians claim there is a common factor to their madness; that they are all psychically linked through a communal wavelength known as the cobweb or madness network.",
    disciplinas: [
      {
        nome: "Auspex",
        descricao: "Malkavians use Auspex to enhance their senses, strengthening their sight or hearing to a supernatural level, or to determine a mortal's fears, illusions, and mental weaknesses, so they can play on them horribly as they prepare to feed."
      },
      {
        nome: "Dominate",
        descricao: "Some Malkavians use Dominate to lift all distractions from a victim's mind, completely enthralling them; others use the Discipline to draw forth or inflict psychoses, through the infamous variant known as Dementation."
      },
      {
        nome: "Obfuscate",
        descricao: "The Malkavians do not advertise their use of Obfuscate, conveniently allowing many Kindred to forget they even have access to this Discipline. Some Malkavians secrete themselves in the houses, wards, and care homes of the kine, watching the sleeping faces before discreetly feeding."
      }
    ],
    perdicao: "Afflicted by their lineage, all Malkavians are cursed with at least one type of mental derangement. When the Malkavian suffers a Bestial Failure or a Compulsion, their curse comes to the fore. Suffer a penalty equal to the character's Bane Severity to one category of dice pools (Physical, Social, or Mental) for the entire scene.",
    fome: {
      nome: "Delusion",
      descricao: "The vampire's madness bubbles irrepressibly to the surface. The vampire must act on one of their Convictions with absolute, immediate certainty, regardless of the situation. All actions not directly related to following this Conviction cost a two-dice penalty until the Compulsion ends."
    }
  },

  {
    id: "ministry",
    nome: "The Ministry",
    alcunhas: ["Serpents", "The Clan of Faith", "The Clan of Lies", "Setites"],
    simbolo: "🐍",
    cor: "#1C3A1C",
    citacao: "You call me a liar, a tempter, and a degenerate, but all of your supposed insults are simply the weight of the chains in which you have continued to shackle yourself.",
    resumo: "The Ministry always has something to offer. This often cult-like clan recruits those able to employ temptation as a weapon. They Embrace those with the will and means to sway, entrap, and ultimately liberate their targets from whatever they seek: the victim's possessions, allegiance, or even faith. To the Serpents, everything has a price.",
    historia: "Part clan, part cult, the Ministry occupies a strange niche in Kindred society. To their own minds, the Ministry serves the purpose of liberating individuals from uncritically accepting the burden of 'sin,' whether in the form of religious doctrine, social stigma, or even the Traditions of the Damned. To the Ministry mind, questioning is itself a sacrament. Without sin, what value has righteousness? The way of the Ministry is to challenge a prevailing morality, to ask 'Why is this forbidden?' Perhaps the largest faction of the clan has appropriated the Egyptian god Set, with whom the elders of the clan claim a connection or even consanguinity — thus their sobriquet of Setites.",
    disciplinas: [
      {
        nome: "Obfuscate",
        descricao: "Ministry Kindred use this Discipline to discover the beliefs, outlooks, and vices of vampires and mortals alike, to facilitate their exploitation and liberation. Powerful Ministers also often wear the faces of trustworthy figures and friends to better lure prey into their shrines and temples."
      },
      {
        nome: "Presence",
        descricao: "For many Ministers in the modern nights, this is their favored ability, offering a power with a finesse that satisfies even the self-styled enforcers of the Masquerade. Serpents use Presence with great prowess, wielding majestic gestures and resounding speeches that cut to the hearts of a congregation."
      },
      {
        nome: "Protean",
        descricao: "The Ministers use this ability to awe observers but also have use of its many novel ways of escaping harm. They will often adopt the form of a snake over that of a wolf, but can meld with the earth to avoid the sun alongside any Gangrel."
      }
    ],
    perdicao: "The Blood of a Minister abhors the light. When exposed to direct illumination, whether natural or artificial, members of the clan recoil. Ministers receive a penalty equal to their Bane Severity to all dice pools when subjected to bright light directed straight at them. Also, add their Bane Severity to Aggravated damage taken from sunlight.",
    fome: {
      nome: "Transgression",
      descricao: "The prevailing wisdom of the Clan of Faith is that everyone's mind and spirit are bound by invisible chains of their own making. Their Blood chafing at these bindings, the Minister suffers a burning need to break them. The vampire receives a two-dice penalty to all dice pools not relating to enticing someone (including themselves) to break a Chronicle Tenet or personal Conviction, causing at least one Stain and ending this Compulsion."
    }
  },

  {
    id: "nosferatu",
    nome: "Nosferatu",
    alcunhas: ["Horrors", "The Clan of the Hidden", "Sewer Rats", "Lepers", "Hives", "Carnies", "Scabs", "Kapos", "Vagrants", "Orloks"],
    simbolo: "🐀",
    cor: "#2B2B2B",
    citacao: "We may not be pretty or able to blend in with the kine. We can't pretend to be anything but degenerate monsters. But you know what? That gives us perspectives every one of those other deluded bastards lacks.",
    resumo: "For the Nosferatu the Embrace is a journey through abjection, as the Blood of the horror gradually deforms the struggling tissues of the human body into grotesque abominations. Weeks of pain result in deformities similar to terrible birth defects, cancer growths, crippling injuries, and leper-like sores. But perhaps pain and humiliation teaches compassion.",
    historia: "The Nosferatu are the most humane of the Kindred, wearing their curse on the outside rather than the inside. To blend in, some call on the Blood to wear the borrowed faces of their victims or disappear from sight, while others rely on prosthetics and heavy make-up. When the Second Inquisition found SchreckNET, many Kindred secretly proposed a toast to the collapse of the clan. But those who endured and flourished had mastered the arts of secure archiving, physically and online. They bolstered their existing bonds with contacts and clients, and steadily regained the trust of Kindred who value a central information hub for research and the exchange of secret messages.",
    disciplinas: [
      {
        nome: "Animalism",
        descricao: "The Nosferatu treasure the Discipline of Animalism for its utility in increasing their spy network, gaining familiars, allowing the delivery of messages, and granting the ability to suddenly swarm an opponent with a horde of rats, bugs, or birds."
      },
      {
        nome: "Obfuscate",
        descricao: "The Nosferatu have mixed opinions on Obfuscate, as the Discipline enables them to blend in with others, but also masquerades that which defines their clan. Some Nosferatu are proud of their unconcealed monstrosity, while others take every effort to hide it."
      },
      {
        nome: "Potence",
        descricao: "Nosferatu use Potence to rapidly neutralize foes. The Nosferatu understand the merit of hit and run, incapacitating a vessel before feeding and fleeing, or breaking the Anarch Baron's head before vaulting away from their hangout."
      }
    ],
    perdicao: "Hideous and vile, all Nosferatu count as having the Repulsive Flaw (-2) and can never increase their rating in the Looks Merit. In addition, any attempt to disguise themselves as human incurs a penalty to their dice pool equal to their character's Bane Severity (this includes the Obfuscate powers Mask of a Thousand Faces and Impostor's Guise).",
    fome: {
      nome: "Cryptophilia",
      descricao: "The vampire becomes obsessed with uncovering and possessing secrets. The vampire must spend the scene attempting to discover or steal at least one secret from someone in the scene. Any action not taken toward this goal costs a two-dice penalty. The Compulsion ends when the vampire obtains a secret or the scene ends."
    }
  },

  {
    id: "ravnos",
    nome: "Ravnos",
    alcunhas: ["Rogues", "Ravens", "Daredevils", "The Haunted"],
    simbolo: "🦅",
    cor: "#3D1A00",
    citacao: "To dazzle and fade – forever in motion and always on the run.",
    resumo: "Masters of misdirection, the Ravnos prefer not to fight or bleed for something they can obtain through subtler means. They can charm and vanish within the same mortal breath, and those once fooled quickly learn to question their very senses when in the company of Ravens. Always on the move, the Ravnos can never rest in the same place for long lest their curse light them on fire as they slumber.",
    historia: "A clan almost annihilated in the opening salvo of the Gehenna War, its embers now grow brighter with each passing night. Others know them as message-bearers, wanderers, and mind-fuckers. Their methods are not brute force, adoration of crowds, or meticulous centuries-spanning plots, but rather wit and panache, artful charm, and outright illusion. While the nomadic habits (and even requirements) of the clan make any kind of proper organization difficult, something like a Ravnos revival is forming. A complex set of signs and signals, known and taught only to members of the clan, helps them find and identify each other.",
    disciplinas: [
      {
        nome: "Animalism",
        descricao: "The Ravnos maintain an almost affable relationship with animals, especially ravens, foxes, coyotes, spiders, and monkeys. At the Storyteller's discretion, reduce the Difficulty for Animalism tests involving these animals by one and increase it for all other kinds of animals. Employing these familiars as spies, distractions, and occasional companions, a Ravnos is never truly alone on the road."
      },
      {
        nome: "Obfuscate",
        descricao: "While many Rogues are able to vanish from sight and remain hidden, the clan is also adept at extending the use of Obfuscate to craft elaborate and sustained hallucinations, effectively using their Presence to propel the properties of the Discipline to encompass more than their own visage."
      },
      {
        nome: "Presence",
        descricao: "The go-to method when natural charm and persuasion isn't enough. Few Daredevils are without at least some measure of this Discipline. They make frequent use of Presence to procure victims in a pinch, and the Discipline also has a part to play in hallucinatory powers."
      }
    ],
    perdicao: "The Ravnos are doomed. The sun's fire that incinerated their founder rages through the Blood of the clan, erupting from their very flesh if they ever settle down for long. If they slumber in the same place more than once in seven nights, roll a number of dice equal to their Bane Severity. They receive Aggravated damage equal to the number of 10s (critical results) rolled as they scorch from within. Two resting places need to be at least a mile apart to avoid triggering the Bane.",
    fome: {
      nome: "Tempting Fate",
      descricao: "The vampire is driven by their Blood to court danger. The next time the vampire is faced with a problem to solve, any attempt at a solution short of the most daring or dangerous incurs a two-dice penalty. Suitably flashy and risky attempts can even merit bonus dice for this occasion. The Compulsion persists until the problem is solved or further attempts become impossible."
    }
  },

  {
    id: "salubri",
    nome: "Salubri",
    alcunhas: ["Cyclops", "Soul-Thieves", "Dajjals", "Saulot's Progeny"],
    simbolo: "👁",
    cor: "#1A3A5C",
    citacao: "To make one's haven in the vale of sorrows and forever tread a path of thorns.",
    resumo: "Most of their kind lost to undead usurpers, the highly desirable Blood of the hunted Salubri is a prize to other vampires. This, and their reluctance to Embrace, makes them rare in the modern nights. They often recruit those on the edge of death, believing their curse can provide the worthy a second chance, and they count some of the most humane vampires among their ranks.",
    historia: "The Salubri are arguably no longer even a clan, their progenitor, so it is told, having succumbed to the fangs of a more ambitious usurper who built his own Clan Tremere with that purloined Blood. Theirs is a legacy of tragedy but also a bitter lesson in the millennia-spanning Eternal Struggle. Every Salubri bears a third eye in the center of their forehead, the indicator of their lineage. According to their custom, Salubri sires Embrace only when they reach Golconda, thereby passing on their curse anew each time. Salubri childer are few — it is whispered that only seven ever exist at one time.",
    disciplinas: [
      {
        nome: "Auspex",
        descricao: "Much of the storied wisdom of the Salubri comes from being able to perceive beyond the ken of less observant Kindred. Considered by a philosophical mind, the hidden truths of the world reveal themselves."
      },
      {
        nome: "Dominate",
        descricao: "The Salubri use Dominate to unburden others of the horrors of being a vampire or from witnessing the atrocities Kindred may commit. Whether erasing troubling memories or bolstering individuals against the undesired consequences of their actions, the Salubri have developed the ability to apply this Discipline as a balm."
      },
      {
        nome: "Fortitude",
        descricao: "A clan so despised needs every advantage it can to survive the modern nights, and the Salubri have also learned to will forth their own hardiness as a boon to others' well-being."
      }
    ],
    perdicao: "The Salubri are hunted: Kindred of other clans are especially appreciative of Salubri vitae. When a non-Salubri partakes of the blood of a Cyclops, they often find it difficult to pull themselves away. Consuming enough to abate at least one Hunger level requires a hunger frenzy test at Difficulty 2 + the Salubri's Bane Severity. Additionally, the third eye that Saulot opened passes down through the bloodline every time a Salubri Embraces. Any time a Salubri activates a Discipline power, the third eye weeps vitae, triggering hunger frenzy tests from nearby vampires with Hunger 4 or more.",
    fome: {
      nome: "Affective Empathy",
      descricao: "When a Salubri suffers a Compulsion, the Kindred becomes overwhelmed with empathy for a personal problem that afflicts someone in the scene, and seeks to further its resolution. Any action not taken toward mitigating that personal tragedy incurs a two-dice penalty. The Compulsion persists until the sufferer's burden is eased or a more immediate crisis supersedes it or the end of the scene."
    }
  },

  {
    id: "toreador",
    nome: "Toreador",
    alcunhas: ["Divas", "The Clan of the Rose", "Degenerates", "Artists", "Harlots", "Arikelites", "Hedonists", "Sensates", "Perverts"],
    simbolo: "🌹",
    cor: "#8B0066",
    citacao: "Beauty is power, and love can make anyone do just about anything. And that is the promise of the Toreador. They can make even the dead feel something raw, something real.",
    resumo: "Cursed by their unbridled sensuality, the divas are obsessed by aesthetic perfection. But to dismiss the Toreador as wanton perverts or shallow artists is the last mistake a Kindred will ever make. Beauty is power, and love can make anyone do just about anything.",
    historia: "Clan Toreador has ever preached selectiveness in its rituals of the Embrace. The clan elders stress time and again that the clan requires pioneers among the arts and every kind of avant-garde. For this reason, many Toreador emerge from the ranks of accomplished artists. To the Toreador, art encompasses all forms of entertainment and stimulation. The clan courts the greatest actors, singers, writers, dancers, and even sex workers. Despite the custom of Embracing only the best, the Toreador fixation on beauty and innocence has caused many a diva to make a fledgling in haste, resulting in shallow hedonists and one-hit wonders. The clan still rides high, leading the Camarilla alongside the Ventrue and Tremere.",
    disciplinas: [
      {
        nome: "Auspex",
        descricao: "Toreador are ever on the hunt for exquisite experiences and use Auspex to identify the most susceptible vessels and those who might, through their feelings and temperament, offer new tastes and sensations to the drinker during the feed."
      },
      {
        nome: "Celerity",
        descricao: "The Toreador claim they are not combatants, but few move as swiftly as the degenerate using Celerity to cut an opponent to ribbons before they have even had time to draw their weapon. Toreador often use Celerity to enhance artistic or performative skills."
      },
      {
        nome: "Presence",
        descricao: "The Toreador master the Discipline of Presence, often using it in concert with Auspex to manipulate the emotions of Kindred and kine. Presence can guarantee an appreciative audience or cause the failure of another artist."
      }
    ],
    perdicao: "Toreador desire beauty so intensely that they suffer in its absence. While a Toreador character finds itself in less than beautiful surroundings, lose the equivalent of their Bane Severity in dice from dice pools to use Disciplines. This obsession with aesthetics also causes divas to lose themselves in moments of beauty — a bestial failure often results in a rapt trance.",
    fome: {
      nome: "Obsession",
      descricao: "Something in the scene captures the Toreador's undivided attention. The vampire becomes captivated by a person, object, piece of art, or any aesthetic quality in the scene, and must spend at least two turns doing nothing but appreciating it. After this, the Toreador is free to act normally, but will find it difficult to pay attention to anything else. Any action not relating to the object of fascination costs a two-dice penalty."
    }
  },

  {
    id: "tremere",
    nome: "Tremere",
    alcunhas: ["Usurpers", "Warlocks", "Hemetics", "Thaumaturges", "Transgressors", "The Broken Clan", "Blood Witches"],
    simbolo: "⊙",
    cor: "#6B0000",
    citacao: "We were never noble. Our clan consists of mortals who sought power they didn't deserve. Perhaps it's time we Embrace those who love magic for its own sake.",
    resumo: "A Hermetic mage in eighth century Romania, Tremere was the leader of a cabal of magick users feared for their obsession with knowledge and power. Unable to accept his own mortality, Tremere instigated the most terrifying magickal experiments ever conducted, damning himself and his followers to a hell of their own making.",
    historia: "After the Second Inquisition destroyed the Prime Chantry in Vienna in 2008, the Tremere fell from gray eminences to personae non gratae in many regions. The arrogance of the Pyramid had made the Usurpers few friends. Without the Pyramid ordering them into rank and value, the warlocks find themselves competing with their fellow Kindred and, increasingly, with each other for anything that might allow them to regain some of their former power. The term 'mercenary magus' is becoming increasingly widespread, as warlocks who were formerly Bound by the will of their masters find themselves free to serve for whatever price they choose.",
    disciplinas: [
      {
        nome: "Auspex",
        descricao: "Tremere use Auspex to perceive the auras of others, search for evidence of magical essences and important objects left behind, and to communicate with each other across vast distances without fear of being overheard."
      },
      {
        nome: "Blood Sorcery",
        descricao: "Master thaumaturges, the Tremere's expertise in blood magick makes them a valued, if mistrusted, pillar of the Camarilla. Using Blood Sorcery, they can convey devastating attacks on an opponent's mind and body, defend themselves, and ease their feeding."
      },
      {
        nome: "Dominate",
        descricao: "The Tremere will do almost anything for the sake of knowledge and influence, and Dominate is the Discipline that lets them get away with it. When attempting to feed, a Tremere will show little compunction against using the Discipline to force a mortal into baring their throat."
      }
    ],
    perdicao: "Once the clan was defined by a rigid hierarchy of Blood Bonds. But after the fall of Vienna, their Blood has recoiled and aborted all such connections. Tremere vitae can no longer Blood Bond other Kindred, though they themselves can be Bound by Kindred from other clans. A Tremere can still bind mortals and ghouls, though the corrupted vitae must be drunk an additional number of times equal to the vampire's Bane Severity for the bond to form.",
    fome: {
      nome: "Perfectionism",
      descricao: "Nothing but the best will do. The Tremere must accomplish the next task they undertake with complete success — partial success is failure. If they fail, they must try again if at all possible. Any action that is not a reattempt of the failed action costs a two-dice penalty until they try again or the scene ends."
    }
  },

  {
    id: "tzimisce",
    nome: "Tzimisce",
    alcunhas: ["Dragons", "The Old Clan", "Voivodes", "Stokers"],
    simbolo: "🐉",
    cor: "#003320",
    citacao: "Not to lead, not to triumph, but to rule — to own utterly.",
    resumo: "To the Tzimisce, possession is all. They aim to dominate and own the subject of their possessiveness, jealously guarding it like their namesake dragon would its hoard. Everything from land, people, cults, companies, or gangs can fall under the covetous claws of a Dragon.",
    historia: "The clan's charges have traditionally been defined geographically, such as a land or a regional people, but as Transylvanian properties dwindle they extend their obsession to gangs or business chains or even military units. This relentless possessiveness extends as well to the physical form of the Tzimisce, who consider themselves the ultimate owners of their bodies, even beyond the limitations of the Curse of Caine. Many Dragons practice a specialization of the Protean Discipline known as Vicissitude that allows them to rework their bodies and those of subjects and even less-willing victims. The Tzimisce participated vigorously in the Anarch Revolt, and were one of the founding clans of the Sabbat.",
    disciplinas: [
      {
        nome: "Animalism",
        descricao: "Some Tzimisce cultivate Animalism as an extension of their oneness with their domains. Others see it as a tool to better command hosts of lesser beasts in order to claim those domains. In any case, Tzimisce have long felt an affinity with the more bestial denizens of their ancestral lands."
      },
      {
        nome: "Dominate",
        descricao: "The perfect Discipline for enforcing one's edicts through sheer mental force. Dominate not only helps the Dragons seize the object of their obsession, but also conditions long-term servitors into extensions of the Fiend's unquestionable will."
      },
      {
        nome: "Protean",
        descricao: "As masters of their own physical forms, the Tzimisce use Protean to force themselves into other shapes, especially those associated with many of the ancestral lands of the Old Clan. Many Tzimisce practice the methods of Vicissitude, which allows them to transcend the rote forms of Protean and treat their own bodies and those of their subjects as primal clay."
      }
    ],
    perdicao: "The Tzimisce are grounded: Each Tzimisce must choose a specific charge — a physical domain, a group of people, an organization, or even something more esoteric — but clearly defined and limited. The Kindred must spend their daysleep surrounded by their chosen charge. If they do not, they sustain aggravated Willpower damage equal to their Bane Severity upon waking the following night.",
    fome: {
      nome: "Covetousness",
      descricao: "When a Tzimisce suffers a Compulsion, the Kindred becomes obsessed with possessing something in the scene, desiring to add it to their proverbial hoard. This can be anything from an object to a piece of property to an actual person. Any action not taken toward this purpose incurs a two-dice penalty. The Compulsion persists until ownership is established or the object of desire becomes unattainable."
    }
  },

  {
    id: "ventrue",
    nome: "Ventrue",
    alcunhas: ["The Clan of Kings", "Blue Bloods", "Tyrants", "Warlords", "Patricians", "Borgias", "the Cult of Mithras"],
    simbolo: "♜",
    cor: "#00008B",
    citacao: "You will come to understand that this clan is destined to rule. We have been emperors, kings and queens, and now we are the heads of global corporations. The others look to us for leadership and we provide it, for we are the best equipped to do so.",
    resumo: "In their own eyes, only the Clan of Kings has the restraint, the wisdom, the control, and the pedigree to lead their kind through the night. Throughout their time as god-kings of ancient Babylon and lords and ladies of the Dark Ages to their contemporary roles as guardians of royal blood, majority shareholders, and campaign fund backers, they have been obsessed with the impulse to rule.",
    historia: "Clan Ventrue has long been the leaders of the Camarilla, holding more positions of power than any other clan, and they are loath to give that up. The Ventrue believe in the strength of tradition and lineage. The Embrace is one of their most important rituals, and the choice of childe affects the way other members of the clan treat the sire. Ventrue therefore aim to Embrace overachievers, politically or financially powerful kine, or those with a talent that sets them apart from the masses. The Ventrue are the establishment. They set and maintain the rules, punishing those who break them. The uncomfortable truth is that without them, the Masquerade, and the Camarilla with it, would have fallen long ago.",
    disciplinas: [
      {
        nome: "Dominate",
        descricao: "The Ventrue consider themselves the masters of this Discipline, using it primarily to exert their will on vassals and kine. When feeding, a Ventrue may command a mortal to bare their neck, or use Dominate to erase all memory of a feeding. Ventrue also expertly use this Discipline to protect the Masquerade."
      },
      {
        nome: "Fortitude",
        descricao: "Fortitude enables the Ventrue to keep their thrones even when armies array against them, and to weather every blade, bullet, and bomb. Where other Kindred might run short on vitae, the Ventrue resist the environment and take their fill."
      },
      {
        nome: "Presence",
        descricao: "The Ventrue seek to tame the court and build the love and devotion of others toward their rule. The Discipline is also used by the Ventrue who wants others to see how easy they acquire vessels. The clan values conservation of time and resources, and Presence allows a hungry blue blood to be efficient when luring their prey."
      }
    ],
    perdicao: "The Ventrue are in possession of rarefied palates. When a Ventrue drinks blood from any mortal outside their preference, a profound exertion of will is required or the blood taken surges back up as scarlet vomit. Preferences range greatly, from Ventrue who can only feed from genuine brunettes, individuals of Swiss descent, or homosexuals, to others who can only feed from soldiers or meth users. If you want your character to feed from anything but their preferred victim, you must spend Willpower points equal to the character's Bane Severity.",
    fome: {
      nome: "Arrogance",
      descricao: "The vampire must be in complete command of the scene. If the vampire is not already in a position of leadership or authority, they must take one, by force if necessary. Any action that doesn't serve to assert or maintain their dominance incurs a two-dice penalty. The Compulsion ends when the vampire is the unquestioned leader of the scene, or it ends."
    }
  }
];

// Export for use in site
if (typeof module !== 'undefined' && module.exports) {
  module.exports = clans;
}
