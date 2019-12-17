export const data = {
    uid: 0,
    officers: {
        0: {
            first_name: "Jane",
            last_name: "Wooden",
            posted_updates: [],
            read_updates: [0, 1, 3, 5, 7, 8, 9, 10],
            badge_number: 0,
            cases: [],
            starredCases: ["NSP190930", "NSP194670"]
        },
        1: {
            first_name: "Dave",
            last_name: "Goodson",
            posted_updates: [],
            read_updates: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10],
            badge_number: 1,
            cases: [],
            starredCases: ["NSP194670", "NSP194386"]
        },
        304: {
            first_name: "Joseph",
            last_name: "Mother",
            badge_number: 304,
            posted_updates: [0],
            read_updates: [0, 1, 2],
            cases: ["NSP194670"]
        },
        225: {
            first_name: "Christopher",
            last_name: "Owens",
            badge_number: 225,
            posted_updates: [1],
            read_updates: [],
            cases: ["NSP194670"]
        },
        901: {
            first_name: "Jennifer",
            last_name: "Yates",
            badge_number: 901,
            posted_updates: [2],
            read_updates: [2, 3],
            cases: ["NSP194670"]
        },
        271: {
            first_name: "Kristen",
            last_name: "Drake",
            badge_number: 271,
            posted_updates: [3],
            read_updates: [2, 3],
            cases: ["NSP190930"]
        },
        490: {
            first_name: "Anthony",
            last_name: "Griffiths",
            badge_number: 490,
            posted_updates: [4],
            read_updates: [0, 1, 4],
            cases: ["NSP199075"]
        },
        572: {
            first_name: "Wade",
            last_name: "Jenkins",
            posted_updates: [],
            read_updates: [0, 1, 4, 7, 8, 9],
            badge_number: 572,
            cases: ["NSP194670", "NSP190930", "NSP197438"]
        },
        198: {
            first_name: "Bob",
            last_name: "Smith",
            badge_number: 198,
            read_updates: [5],
            posted_updates: [5],
            cases: ["NSP194386"]
        },
        485: {
            first_name: "Karl",
            last_name: "Michaels",
            badge_number: 485,
            read_updates: [6],
            posted_updates: [6],
            cases: ["NSP194386"]
        },
        168: {
            first_name: "Dana",
            last_name: "Smith",
            badge_number: 168,
            read_updates: [7],
            posted_updates: [7],
            cases: ["NSP198888"]
        },
        349: {
            first_name: "Barbara",
            last_name: "Davis",
            badge_number: 349,
            read_updates: [8, 10],
            posted_updates: [8, 10],
            cases: ["NSP197438"]
        },
        968: {
            first_name: "Daniel",
            last_name: "Daniels",
            badge_number: 968,
            read_updates: [9],
            posted_updates: [9],
            cases: ["NSP197438"]
        },
    },
    updates: {
        0: { id: 0, caseId: "NSP194670", officerId: 304, timestamp: 1572910000, date: "2019-10-31", time: "23:00", location: "Kearney, NE", information: "Numerous homes surrounding the University of Nebraska at Kearney campus were robbed Halloween night. There are currently fifteen reported robberies, but no evidence that the robberies are connected. No witnesses have come forward. Five affected families are lined up for interviewing in the coming week (the Joneses, the Andersons, the Phillips, the Gentrys, and the Shahs).", comments: [] },
        1: { id: 1, caseId: "NSP194670", officerId: 225, timestamp: 1572910000, date: "2019-11-01", time: "11:00", location: "Omaha, NE", information: "Barbara and Fredrick Jones were interviewed at the station this morning in relation to the robbery of their home the night of 10/31/2019. Barbara was out of the home to pick up their fifteen year old son, Tristan, from a friend’s house. Frederick was home, however he states that he had fallen asleep on the living room couch at approximately 2200. The living room television was playing Family Feud at a high volume, which he suggests may have masked the sound of the intruder. It’s worth noting that the only items reported stolen were from the basement and the kitchen. Canvasing of the house is in progress.", comments: [] },
        2: { id: 2, caseId: "NSP194670", officerId: 901, timestamp: 1572910000, date: "2019-11-03", time: "02:00", location: "0145 Brookside Avenue, Kearney, NE, 68848", information: "The home belonging to Barbara and Frederick Jones was inspected. The house’s garage is attached with a garage door and a side door. While the garage door cannot feasibly be opened by less than two physically fit persons, the side door is left unlocked at all times. It jams shut, but can be opened without a key with a small amount of extra force. The door from the interior of the garage into the house is also left unlocked at all times. The house’s kitchen and basement are both accessible from this interior door, and the living room is off of the path to both rooms.", comments: [] },
        3: { id: 3, caseId: "NSP190930", officerId: 271, timestamp: 1572910000, date: "2019-09-27", time: "21:00", location: "144th St & Pacific St, Omaha, NE", information: "An aggravated assault took place at the Dunkin’ Donuts off of 144th & Pacific. A witness by the name of Praveen Rao reports that the suspect, Krishna Kotha, assaulted the cashier working, Michael Michaels. Mr. Kotha had ordered a six pack of chocolate glazed donut holes and was told by Mr. Michaels that they were out of stock. Mr. Kotha promptly leaped across the counter and attacked Mr. Michaels. Mr. Rao was about to enter the Dunkin Donuts when he saw the incident begin and promptly called the police. The assault lasted for approximately fifteen minutes before police arrived on the scene. There are currently concerns that this incident may be related to other assaults happening at Dunkin Donuts locations across Nebraska.", comments: [] },
        4: { id: 4, caseId: "NSP199075", officerId: 490, timestamp: 1572910000, date: "2019-10-15", time: "07:30", location: "Millard Avenue and Q St, Omaha, NE", information: "A red 2011 Toyota Corolla with license plate VXT 105 was rear-ended by a black 2005 Buick LeSabre with license plate SVT 913. The Toyota was heading west on Q street and was at a stop at the intersection. The Buick made contact at approximately twenty five miles per hour. The driver showed signs of intoxication and agreed to take a Brethalyzer. The detected BAC was 0.201. The driver has been taken into custody.", comments: [] },
        5: { id: 5, caseId: "NSP194386", officerId: 198, timestamp: 1572910000, date: "2019-11-06", time: "16:00", location: "Lincoln, NE", information: "The scene of the incident was on the corner of This St. & That St. The car that was hit was a Black Honda Civic. The other car is still being searched for. No one was injured in the accident, though the car did receive some damage.", comments: [] },
        6: { id: 6, caseId: "NSP194386", officerId: 485, timestamp: 1572910000, date: "2019-11-07", time: "16:01", location: "Lincoln, NE", information: "The car in question has the license plate number of RUI 458. It also happens to be a Black Honda Civic.", comments: [] },
        7: { id: 7, caseId: "NSP198888", officerId: 168, timestamp: 1572910000, date: "2019-10-23", time: "12:12", location: "Kearney, NE", information: "The cat was lost around 1212 and the location of the owner’s home is 4242 Your St. The dog is a white Chihuahua as can be seen on the tag around her neck. ", comments: [] },
        8: { id: 8, caseId: "NSP197438", officerId: 349, timestamp: 1572910000, date: "2019-10-18", time: "21:00", location: "Hastings, NE", information: "The robbery that took place at the Vav house happened around 1944. The items that were stolen include a laptop, mouse, welcome mat, coffee mug, refrigerator, a multitude of stickers,  among others. No one in the family was injured as they were all outside of the house at the time of the robbery. ", comments: [] },
        9: { id: 9, caseId: "NSP197438", officerId: 968, timestamp: 1572910000, date: "2019-10-19", time: "13:13", location: "Hastings, NE", information: "Other items that were reported as missing are a television, microwave, desk lamp, laptop charger, and white board. The family believes they may have an idea as to who may have robber the home. They have given their keys to certain neighbors in the past. ", comments: [] },
        10: { id: 10, caseId: "NSP197438", officerId: 349, timestamp: 1572910000, date: "2019-10-20", time: "10:01", location: "Hastings, NE", information: "The suspect of the robbery was found and identified as Natin Gindry.", comments: [] },
    },
    cases: {
        "NSP190930": { id: "NSP190930", openDate: "2019-09-27", type: "Assault", tasks: [2, 3], updates: [3], open: true },
        "NSP199075": { id: "NSP199075", openDate: "2019-10-15", type: "Traffic", tasks: [], updates: [4], open: true },
        "NSP197438": { id: "NSP197438", openDate: "2019-10-18", closeDate: "2019-12-08", type: "Robbery", tasks: [5, 6], updates: [8, 9, 10], open: false },
        "NSP198888": { id: "NSP198888", openDate: "2019-10-23", type: "Lost Dog", tasks: [], updates: [7], open: true },
        "NSP194670": { id: "NSP194670", openDate: "2019-10-31", type: "Robbery", tasks: [0, 1, 4], updates: [0, 1, 2], open: true },
        "NSP194386": { id: "NSP194386", openDate: "2019-11-06", type: "Hit & Run", tasks: [], updates: [5, 6], open: true },
    },
    tasks: {
        0: { id: 0, caseId: "NSP194670", officerId: 349, timestamp: 1573164236, label: "Get DNA Analysis Results", complete: false },
        1: { id: 1, caseId: "NSP194670", officerId: 349, timestamp: 1572627540, label: "Interview Suspect: Tom Alderwald", complete: false },
        2: { id: 2, caseId: "NSP190930", officerId: 349, timestamp: 1572275700, label: "File Warrant to Search Suspect's House: Reggie Wendel", complete: false },
        3: { id: 3, caseId: "NSP190930", officerId: 349, timestamp: 1572275400, label: "Get Fingerprinting Results", complete: true },
        4: { id: 4, caseId: "NSP194670", officerId: 349, timestamp: 1572228900, label: "Stakeout Suspect's Place of Work", complete: true },
        5: { id: 5, caseId: "NSP197438", officerId: 349, timestamp: 1572225660, label: "Call Victim's Family", complete: true },
        6: { id: 6, caseId: "NSP197438", officerId: 349, timestamp: 1572036180, label: "Complete ", complete: true },
    },
}