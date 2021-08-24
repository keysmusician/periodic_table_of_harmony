// Array of Harmony_set objects used to create nodes with donut charts.
var dataset = [
    {
        id: 'HS7-1',
        name: "Major Scale (and modes)",
        intervals: [2, 2, 2, 1, 2, 2, 1],
        root: 4,
        parents: [],
        children: ['HS6-1', 'HS6-2', 'HS6-3', 'HS6-4', 'HS6-5', 'HS6-6']
    },
    {
        id: 'HS6-1',
        name: "",
        intervals: [2, 1, 2, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS5-1', 'HS5-2', 'HS5-3', 'HS5-4', 'HS5-5', 'HS5-6' ]
    },
    {
        id: 'HS6-2',
        name: "",
        intervals: [1, 2, 2, 2, 1, 4],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-1','HS5-7','HS5-8','HS5-9','HS5-10','HS5-11']
    },
    {
        id: 'HS6-3',
        name: "",
        intervals: [2, 2, 2, 1, 2, 3],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-2','HS5-3','HS5-7','HS5-12','HS5-13','HS5-14']
    },
    {
        id: 'HS6-4',
        name: "",
        intervals: [2, 2, 1, 2, 2, 3],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-3','HS5-6','HS5-8','HS5-11','HS5-12']
    },
    {
        id: 'HS6-5',
        name: "",
        intervals: [2, 1, 2, 2, 1, 4],
        root: 4,
        parents: ['7-1'],
        children: ['HS5-4','HS5-6','HS5-8','HS5-9','HS5-13','HS5-15']
    },
    {
        id: 'HS6-6',
        name: "",
        intervals: [1, 2, 2, 1, 2, 4],
        root: 0,
        parents: ['7-1'],
        children: ['HS5-5','HS5-10','HS5-11','HS5-12','HS5-14','HS5-15']
    },
    {
        id: 'HS5-1',
        name: "",
        intervals: [1, 2, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-2','HS4-3','HS4-4','HS4-5']
    },
    {
        id: 'HS5-2',
        name: "",
        intervals: [3, 2, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-2','HS4-6','HS4-7','HS4-8']
    },
    {
        id: 'HS5-3',
        name: "Pentatonic",
        intervals: [2, 3, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-6','HS4-9','HS4-10']
    },
    {
        id: 'HS5-4',
        name: "",
        intervals: [2, 1, 4, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-3','HS4-7','HS4-9','HS4-11','HS4-12']
    },
        {
        id: 'HS5-5',
        name: "",
        intervals: [2, 1, 2, 4, 3],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-8','HS4-10','HS4-11','HS4-13']
    },
    {
        id: 'HS5-6',
        name: "",
        intervals: [2, 1, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-5','HS4-9','HS4-12','HS4-13']
    },
    {
        id: 'HS5-7',
        name: "",
        intervals: [2, 2, 2, 1, 5],
        root: 0,
        parents: [],
        children: ['HS4-1','HS4-6','HS4-14','HS4-15','HS4-16']
    },
    {
        id: 'HS5-8',
        name: "",
        intervals: [2, 2, 1, 4, 3],
        root: 0,
        parents: [],
        children: ['HS4-2','HS4-10','HS4-12','HS4-14','HS4-17']
    },
        {
        id: 'HS5-9',
        name: "",
        intervals: [1, 4, 2, 1, 4],
        root: 0,
        parents: [],
        children: ['HS4-3','HS4-12','HS4-15','HS4-17','HS4-18']
    },
    {
        id: 'HS5-10',
        name: "",
        intervals: [1, 2, 4, 1, 4],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-16','HS4-17','HS4-18','HS4-19']
    },
    {
        id: 'HS5-11',
        name: "",
        intervals: [4, 1, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-4','HS4-5','HS4-10','HS4-17','HS4-19']
    },
    {
        id: 'HS5-12',
        name: "",
        intervals: [2, 2, 1, 2, 5],
        root: 0,
        parents: [],
        children: ['HS4-6','HS4-9','HS4-13','HS4-14','HS4-19']
    },
    {
        id: 'HS5-13',
        name: "",
        intervals: [4, 2, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-7','HS4-10','HS4-13','HS4-15','HS4-20']
    },
    {
        id: 'HS5-14',
        name: "",
        intervals: [2, 4, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS4-8','HS4-9','HS4-16','HS4-19','HS4-20']
    },
    {
        id: 'HS5-15',
        name: "",
        intervals: [1, 2, 2, 1, 6],
        root: 0,
        parents: [],
        children: ['HS4-5','HS4-11','HS4-14','HS4-18','HS4-20']
    },
    {
        id: 'HS4-1',
        name: "",
        intervals: [2, 2, 2, 6],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-2','HS3-3']
    },
    {
        id: 'HS4-2',
        name: "",
        intervals: [3, 2, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-4','HS3-5','HS3-6']
    },
    {
        id: 'HS4-3',
        name: "",
        intervals: [1, 4, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-4','HS3-7','HS3-8']
    },
    {
        id: 'HS4-4',
        name: "",
        intervals: [1, 2, 4, 5],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-5','HS3-7','HS3-9']
    },
    {
        id: 'HS4-5',
        name: "",
        intervals: [1, 2, 2, 7],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-6','HS3-8','HS3-9']
    },
    {
        id: 'HS4-6',
        name: "Major (add 9)",
        intervals: [5, 2, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-4','HS3-10','HS3-11']
    },
    {
        id: 'HS4-7',
        name: "Half-diminished",
        intervals: [3, 4, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-5','HS3-10','HS3-12']
    },
    {
        id: 'HS4-8',
        name: "Dominant 7",
        intervals: [3, 2, 4, 3],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-6','HS3-11','HS3-12']
    },
    {
        id: 'HS4-9',
        name: "",
        intervals: [2, 3, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-6','HS3-10']
    },
    {
        id: 'HS4-10',
        name: "Minor 7 / Major 6",
        intervals: [2, 3, 4, 3],
        root: 0,
        parents: [],
        children: ['HS3-5','HS3-6','HS3-10','HS3-11']
    },
    {
        id: 'HS4-11',
        name: "",
        intervals: [2, 1, 6, 3],
        root: 0,
        parents: [],
        children: ['HS3-6','HS3-7','HS3-12','HS3-13']
    },
    {
        id: 'HS4-12',
        name: "",
        intervals: [2, 1, 4, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-5','HS3-8','HS3-13']
    },
    {
        id: 'HS4-13',
        name: "",
        intervals: [2, 1, 2, 7],
        root: 0,
        parents: [],
        children: ['HS3-6','HS3-9','HS3-10','HS3-13']
    },
    {
        id: 'HS4-14',
        name: "",
        intervals: [2, 2, 1, 7],
        root: 0,
        parents: [],
        children: ['HS3-1','HS3-10','HS3-13','HS3-14']
    },
    {
        id: 'HS4-15',
        name: "",
        intervals: [4, 2, 1, 5],
        root: 0,
        parents: [],
        children: ['HS3-2','HS3-11','HS3-13','HS3-15']
    },
    {
        id: 'HS4-16',
        name: "",
        intervals: [2, 4, 1, 5],
        root: 0,
        parents: [],
        children: ['HS3-3','HS3-4','HS3-14','HS3-15']
    },
    {
        id: 'HS4-17',
        name: "Major 7",
        intervals: [3, 4, 1, 4],
        root: 0,
        parents: [],
        children: ['HS3-5','HS3-8','HS3-11','HS3-14']
    },
    {
        id: 'HS4-18',
        name: "",
        intervals: [1, 6, 1, 4],
        root: 0,
        parents: [],
        children: ['HS3-7','HS3-8','HS3-14','HS3-15']
    },
    {
        id: 'HS4-19',
        name: "",
        intervals: [4, 1, 2, 5],
        root: 0,
        parents: [],
        children: ['HS3-4','HS3-9','HS3-11','HS3-14']
    },
    {
        id: 'HS4-20',
        name: "",
        intervals: [6, 1, 2, 3],
        root: 0,
        parents: [],
        children: ['HS3-9','HS3-10','HS3-12','HS3-15']
    },
    {
        id: 'HS3-1',
        name: "",
        intervals: [2, 2, 8],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4']
    },
    {
        id: 'HS3-2',
        name: "",
        intervals: [4, 2, 6],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4','HS2-6']
    },
    {
        id: 'HS3-3',
        name: "",
        intervals: [2, 4, 6],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-4','HS2-6']
    },
    {
        id: 'HS3-4',
        name: "Sus 2 / Sus 4 / Quartal",
        intervals: [2, 5, 5],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-5']
    },
    {
        id: 'HS3-5',
        name: "Minor Triad",
        intervals: [3, 4, 5],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-4','HS2-5']
    },
    {
        id: 'HS3-6',
        name: "",
        intervals: [2, 7, 3],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-3','HS2-5']
    },
    {
        id: 'HS3-7',
        name: "",
        intervals: [1, 6, 5],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-5','HS2-6']
    },
    {
        id: 'HS3-8',
        name: "",
        intervals: [1, 4, 7],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-4','HS2-5']
    },
    {
        id: 'HS3-9',
        name: "",
        intervals: [1, 2, 9],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-2','HS2-3']
    },
    {
        id: 'HS3-10',
        name: "",
        intervals: [2, 3, 7],
        root: 0,
        parents: [],
        children: ['HS2-2','HS2-3','HS2-5']
    },
    {
        id: 'HS3-11',
        name: "Major Triad",
        intervals: [5, 4, 3],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-4','HS2-5']
    },
    {
        id: 'HS3-12',
        name: "Diminished Triad",
        intervals: [3, 6, 3],
        root: 0,
        parents: [],
        children: ['HS2-3','HS2-6']
    },
    {
        id: 'HS3-13',
        name: "",
        intervals: [2, 1, 9],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-2','HS2-3']
    },
    {
        id: 'HS3-14',
        name: "",
        intervals: [4, 1, 7],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-4','HS2-5']
    },
    {
        id: 'HS3-15',
        name: "",
        intervals: [6, 1, 5],
        root: 0,
        parents: [],
        children: ['HS2-1','HS2-5','HS2-6']
    },
    {
        id: 'HS2-1',
        name: "Minor 2ⁿᵈ / Major 7ᵗʰ",
        intervals: [1, 11],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-2',
        name: "Major 2ⁿᵈ / Minor 7ᵗʰ",
        intervals: [2, 10],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-3',
        name: "Minor 3ʳᵈ / Major 6ᵗʰ",
        intervals: [3, 9],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-4',
        name: "Major 3ʳᵈ / Minor 6ᵗʰ",
        intervals: [4, 8],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-5',
        name: "Perfect 4ᵗʰ / Perfect 5ᵗʰ",
        intervals: [5, 7],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS2-6',
        name: "Tritone",
        intervals: [6, 6],
        root: 0,
        parents: [],
        children: ['HS1-1']
    },
    {
        id: 'HS1-1',
        name: "Single note, Unison, or Octave",
        intervals: [12],
        root: 0,
        parents: [],
        children: []
    }
];