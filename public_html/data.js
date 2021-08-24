"use strict";
// Array of Harmony_set objects used to create nodes with donut charts.
// This version contains a flag for contiguous semitones.
export let dataset = [
    {
    id: "HS12-1",
    name: "Chromatic Scale",
    intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    parents: [],
    children: ["HS11-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS11-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    parents: ["HS12-1"],
    children: ["HS10-1", "HS10-2", "HS10-3", "HS10-4", "HS10-5", "HS10-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    parents: ["HS11-1"],
    children: ["HS9-1", "HS9-2", "HS9-3", "HS9-4", "HS9-5", "HS9-6", "HS9-7", "HS9-8", "HS9-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-2",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    parents: ["HS11-1"],
    children: ["HS9-1", "HS9-9", "HS9-10", "HS9-11", "HS9-12", "HS9-13", "HS9-14", "HS9-15", "HS9-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-3",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    parents: ["HS11-1"],
    children: ["HS9-2", "HS9-9", "HS9-8", "HS9-15", "HS9-16", "HS9-17", "HS9-18", "HS9-11", "HS9-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-4",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    parents: ["HS11-1"],
    children: ["HS9-3", "HS9-10", "HS9-8", "HS9-7", "HS9-14", "HS9-18", "HS9-19", "HS9-17", "HS9-12", "HS9-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-5",
    name: "",
    intervals: [1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    parents: ["HS11-1"],
    children: ["HS9-4", "HS9-11", "HS9-15", "HS9-7", "HS9-6", "HS9-13", "HS9-17", "HS9-18", "HS9-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS10-6",
    name: "",
    intervals: [1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    parents: ["HS11-1"],
    children: ["HS9-5", "HS9-12", "HS9-16", "HS9-14", "HS9-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 1, 1, 4],
    parents: ["HS10-1", "HS10-2"],
    children: ["HS8-1", "HS8-2", "HS8-3", "HS8-4", "HS8-5", "HS8-6", "HS8-7", "HS8-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-2",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 1, 1, 3],
    parents: ["HS10-1", "HS10-2", "HS10-3"],
    children: ["HS8-1", "HS8-9", "HS8-10", "HS8-11", "HS8-12", "HS8-13", "HS8-14", "HS8-15", "HS8-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-3",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 1, 1, 3],
    parents: ["HS10-1", "HS10-3", "HS10-4"],
    children: ["HS8-2", "HS8-9", "HS8-16", "HS8-17", "HS8-18", "HS8-19", "HS8-20", "HS8-21", "HS8-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-4",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 1, 1, 3],
    parents: ["HS10-1", "HS10-4", "HS10-5"],
    children: ["HS8-3", "HS8-10", "HS8-16", "HS8-22", "HS8-23", "HS8-24", "HS8-25", "HS8-26", "HS8-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-5",
    name: "",
    intervals: [1, 1, 1, 2, 1, 1, 1, 1, 3],
    parents: ["HS10-1", "HS10-5", "HS10-6"],
    children: ["HS8-4", "HS8-11", "HS8-17", "HS8-22", "HS8-27", "HS8-28", "HS8-29", "HS8-30", "HS8-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-6",
    name: "",
    intervals: [1, 1, 1, 1, 2, 1, 1, 1, 3],
    parents: ["HS10-1", "HS10-5", "HS10-6"],
    children: ["HS8-5", "HS8-12", "HS8-18", "HS8-23", "HS8-27", "HS8-22", "HS8-31", "HS8-32", "HS8-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-7",
    name: "",
    intervals: [1, 1, 1, 1, 1, 2, 1, 1, 3],
    parents: ["HS10-1", "HS10-4", "HS10-5"],
    children: ["HS8-6", "HS8-13", "HS8-19", "HS8-24", "HS8-28", "HS8-22", "HS8-16", "HS8-33", "HS8-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-8",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 2, 1, 3],
    parents: ["HS10-1", "HS10-3", "HS10-4"],
    children: ["HS8-7", "HS8-14", "HS8-20", "HS8-25", "HS8-29", "HS8-31", "HS8-16", "HS8-9", "HS8-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-9",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 1, 2, 3],
    parents: ["HS10-1", "HS10-2", "HS10-3"],
    children: ["HS8-8", "HS8-15", "HS8-21", "HS8-26", "HS8-30", "HS8-32", "HS8-33", "HS8-9", "HS8-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-10",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 1, 2, 2],
    parents: ["HS10-2", "HS10-4"],
    children: ["HS8-8", "HS8-33", "HS8-34", "HS8-35", "HS8-36", "HS8-37", "HS8-10", "HS8-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-11",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 1, 2, 2],
    parents: ["HS10-2", "HS10-3", "HS10-5"],
    children: ["HS8-15", "HS8-33", "HS8-31", "HS8-38", "HS8-39", "HS8-40", "HS8-35", "HS8-11", "HS8-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-12",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 1, 2, 2],
    parents: ["HS10-2", "HS10-4", "HS10-6"],
    children: ["HS8-21", "HS8-34", "HS8-31", "HS8-28", "HS8-41", "HS8-42", "HS8-36", "HS8-12", "HS8-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-13",
    name: "",
    intervals: [2, 1, 1, 1, 2, 1, 1, 1, 2],
    parents: ["HS10-2", "HS10-5"],
    children: ["HS8-5", "HS8-26", "HS8-35", "HS8-38", "HS8-28", "HS8-23", "HS8-37", "HS8-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-14",
    name: "",
    intervals: [2, 1, 1, 1, 1, 2, 1, 1, 2],
    parents: ["HS10-2", "HS10-4", "HS10-6"],
    children: ["HS8-6", "HS8-30", "HS8-36", "HS8-39", "HS8-41", "HS8-23", "HS8-17", "HS8-34", "HS8-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-15",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 2, 1, 2],
    parents: ["HS10-2", "HS10-3", "HS10-5"],
    children: ["HS8-7", "HS8-32", "HS8-37", "HS8-40", "HS8-42", "HS8-38", "HS8-17", "HS8-10", "HS8-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-16",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 2, 1, 2],
    parents: ["HS10-3", "HS10-6"],
    children: ["HS8-14", "HS8-32", "HS8-29", "HS8-42", "HS8-43", "HS8-39", "HS8-18", "HS8-11", "HS8-21"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-17",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 2, 1, 2],
    parents: ["HS10-3", "HS10-4", "HS10-5"],
    children: ["HS8-20", "HS8-37", "HS8-29", "HS8-24", "HS8-39", "HS8-40", "HS8-19", "HS8-12", "HS8-26"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-18",
    name: "",
    intervals: [1, 2, 1, 1, 1, 2, 1, 1, 2],
    parents: ["HS10-3", "HS10-4", "HS10-5"],
    children: ["HS8-13", "HS8-30", "HS8-25", "HS8-40", "HS8-42", "HS8-24", "HS8-18", "HS8-35", "HS8-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS9-19",
    name: "",
    intervals: [1, 1, 2, 1, 1, 2, 1, 1, 2],
    parents: ["HS10-4"],
    children: ["HS8-19", "HS8-36", "HS8-25"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 1, 5],
    parents: ["HS9-1", "HS9-2", "HS9-9"],
    children: ["HS7-1", "HS7-2", "HS7-3", "HS7-4", "HS7-5", "HS7-6", "HS7-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-2",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 1, 4],
    parents: ["HS9-1", "HS9-2", "HS9-3", "HS9-10"],
    children: ["HS7-1", "HS7-8", "HS7-9", "HS7-10", "HS7-11", "HS7-12", "HS7-13", "HS7-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-3",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 1, 4],
    parents: ["HS9-1", "HS9-3", "HS9-4", "HS9-11"],
    children: ["HS7-2", "HS7-8", "HS7-14", "HS7-15", "HS7-16", "HS7-17", "HS7-18", "HS7-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-4",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 1, 4],
    parents: ["HS9-1", "HS9-4", "HS9-5", "HS9-12"],
    children: ["HS7-3", "HS7-9", "HS7-14", "HS7-19", "HS7-20", "HS7-21", "HS7-22", "HS7-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-5",
    name: "",
    intervals: [1, 1, 1, 2, 1, 1, 1, 4],
    parents: ["HS9-1", "HS9-5", "HS9-6", "HS9-13"],
    children: ["HS7-4", "HS7-10", "HS7-15", "HS7-19", "HS7-23", "HS7-24", "HS7-25", "HS7-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-6",
    name: "",
    intervals: [1, 1, 1, 1, 2, 1, 1, 4],
    parents: ["HS9-1", "HS9-6", "HS9-7", "HS9-14"],
    children: ["HS7-5", "HS7-11", "HS7-16", "HS7-20", "HS7-23", "HS7-26", "HS7-27", "HS7-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-7",
    name: "",
    intervals: [1, 1, 1, 1, 1, 2, 1, 4],
    parents: ["HS9-1", "HS9-7", "HS9-8", "HS9-15"],
    children: ["HS7-6", "HS7-12", "HS7-17", "HS7-21", "HS7-24", "HS7-26", "HS7-28", "HS7-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-8",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 2, 4],
    parents: ["HS9-1", "HS9-8", "HS9-9", "HS9-10"],
    children: ["HS7-7", "HS7-13", "HS7-18", "HS7-22", "HS7-25", "HS7-27", "HS7-28", "HS7-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-9",
    name: "",
    intervals: [3, 1, 1, 1, 1, 1, 1, 3],
    parents: ["HS9-2", "HS9-3", "HS9-8", "HS9-9"],
    children: ["HS7-1", "HS7-28", "HS7-29", "HS7-30", "HS7-31", "HS7-32", "HS7-33", "HS7-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-10",
    name: "",
    intervals: [2, 2, 1, 1, 1, 1, 1, 3],
    parents: ["HS9-2", "HS9-4", "HS9-10", "HS9-15"],
    children: ["HS7-2", "HS7-28", "HS7-34", "HS7-35", "HS7-36", "HS7-37", "HS7-38", "HS7-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-11",
    name: "",
    intervals: [2, 1, 2, 1, 1, 1, 1, 3],
    parents: ["HS9-2", "HS9-5", "HS9-11", "HS9-16"],
    children: ["HS7-3", "HS7-29", "HS7-34", "HS7-39", "HS7-40", "HS7-41", "HS7-42", "HS7-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-12",
    name: "",
    intervals: [2, 1, 1, 2, 1, 1, 1, 3],
    parents: ["HS9-2", "HS9-6", "HS9-12", "HS9-17"],
    children: ["HS7-4", "HS7-30", "HS7-35", "HS7-39", "HS7-43", "HS7-44", "HS7-45", "HS7-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-13",
    name: "",
    intervals: [2, 1, 1, 1, 2, 1, 1, 3],
    parents: ["HS9-2", "HS9-7", "HS9-13", "HS9-18"],
    children: ["HS7-5", "HS7-31", "HS7-36", "HS7-40", "HS7-43", "HS7-46", "HS7-47", "HS7-12"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-14",
    name: "",
    intervals: [2, 1, 1, 1, 1, 2, 1, 3],
    parents: ["HS9-2", "HS9-8", "HS9-14", "HS9-16"],
    children: ["HS7-6", "HS7-32", "HS7-37", "HS7-41", "HS7-44", "HS7-46", "HS7-29", "HS7-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-15",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 2, 3],
    parents: ["HS9-2", "HS9-9", "HS9-11", "HS9-15"],
    children: ["HS7-7", "HS7-33", "HS7-38", "HS7-42", "HS7-45", "HS7-47", "HS7-29", "HS7-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-16",
    name: "",
    intervals: [1, 3, 1, 1, 1, 1, 1, 3],
    parents: ["HS9-3", "HS9-4", "HS9-7", "HS9-8"],
    children: ["HS7-8", "HS7-28", "HS7-26", "HS7-46", "HS7-48", "HS7-49", "HS7-50", "HS7-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-17",
    name: "",
    intervals: [1, 2, 2, 1, 1, 1, 1, 3],
    parents: ["HS9-3", "HS9-5", "HS9-14", "HS9-15"],
    children: ["HS7-9", "HS7-29", "HS7-26", "HS7-51", "HS7-52", "HS7-53", "HS7-54", "HS7-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-18",
    name: "",
    intervals: [1, 2, 1, 2, 1, 1, 1, 3],
    parents: ["HS9-3", "HS9-6", "HS9-16", "HS9-18"],
    children: ["HS7-10", "HS7-30", "HS7-46", "HS7-51", "HS7-55", "HS7-56", "HS7-57", "HS7-16"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-19",
    name: "",
    intervals: [1, 2, 1, 1, 2, 1, 1, 3],
    parents: ["HS9-3", "HS9-7", "HS9-17", "HS9-19"],
    children: ["HS7-11", "HS7-31", "HS7-48", "HS7-52", "HS7-55", "HS7-58", "HS7-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-20",
    name: "",
    intervals: [1, 2, 1, 1, 1, 2, 1, 3],
    parents: ["HS9-3", "HS9-8", "HS9-17", "HS9-18"],
    children: ["HS7-12", "HS7-32", "HS7-49", "HS7-53", "HS7-56", "HS7-48", "HS7-30", "HS7-18"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-21",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 2, 3],
    parents: ["HS9-3", "HS9-9", "HS9-12", "HS9-16"],
    children: ["HS7-13", "HS7-33", "HS7-50", "HS7-54", "HS7-57", "HS7-58", "HS7-30", "HS7-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-22",
    name: "",
    intervals: [1, 1, 3, 1, 1, 1, 1, 3],
    parents: ["HS9-4", "HS9-5", "HS9-6", "HS9-7"],
    children: ["HS7-14", "HS7-34", "HS7-26", "HS7-23", "HS7-43", "HS7-55", "HS7-59", "HS7-19"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-23",
    name: "",
    intervals: [1, 1, 2, 2, 1, 1, 1, 3],
    parents: ["HS9-4", "HS9-6", "HS9-13", "HS9-14"],
    children: ["HS7-15", "HS7-35", "HS7-46", "HS7-23", "HS7-59", "HS7-60", "HS7-61", "HS7-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-24",
    name: "",
    intervals: [1, 1, 2, 1, 2, 1, 1, 3],
    parents: ["HS9-4", "HS9-7", "HS9-17", "HS9-18"],
    children: ["HS7-16", "HS7-36", "HS7-48", "HS7-43", "HS7-59", "HS7-49", "HS7-62", "HS7-21"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-25",
    name: "",
    intervals: [1, 1, 2, 1, 1, 2, 1, 3],
    parents: ["HS9-4", "HS9-8", "HS9-18", "HS9-19"],
    children: ["HS7-17", "HS7-37", "HS7-49", "HS7-55", "HS7-60", "HS7-31", "HS7-22"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-26",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 2, 3],
    parents: ["HS9-4", "HS9-9", "HS9-13", "HS9-17"],
    children: ["HS7-18", "HS7-38", "HS7-50", "HS7-59", "HS7-61", "HS7-62", "HS7-31", "HS7-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-27",
    name: "",
    intervals: [1, 1, 1, 3, 1, 1, 1, 3],
    parents: ["HS9-5", "HS9-6"],
    children: ["HS7-19", "HS7-39", "HS7-51", "HS7-23"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-28",
    name: "",
    intervals: [1, 1, 1, 2, 2, 1, 1, 3],
    parents: ["HS9-5", "HS9-7", "HS9-12", "HS9-13"],
    children: ["HS7-20", "HS7-40", "HS7-52", "HS7-43", "HS7-19", "HS7-50", "HS7-63", "HS7-24"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-29",
    name: "",
    intervals: [1, 1, 1, 2, 1, 2, 1, 3],
    parents: ["HS9-5", "HS9-8", "HS9-16", "HS9-17"],
    children: ["HS7-21", "HS7-41", "HS7-53", "HS7-55", "HS7-39", "HS7-50", "HS7-32", "HS7-25"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-30",
    name: "",
    intervals: [1, 1, 1, 2, 1, 1, 2, 3],
    parents: ["HS9-5", "HS9-9", "HS9-14", "HS9-18"],
    children: ["HS7-22", "HS7-42", "HS7-54", "HS7-59", "HS7-51", "HS7-63", "HS7-32", "HS7-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-31",
    name: "",
    intervals: [1, 1, 1, 1, 2, 2, 1, 3],
    parents: ["HS9-6", "HS9-8", "HS9-11", "HS9-12"],
    children: ["HS7-24", "HS7-44", "HS7-56", "HS7-60", "HS7-39", "HS7-14", "HS7-33", "HS7-27"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-32",
    name: "",
    intervals: [1, 1, 1, 1, 2, 1, 2, 3],
    parents: ["HS9-6", "HS9-9", "HS9-15", "HS9-16"],
    children: ["HS7-25", "HS7-45", "HS7-57", "HS7-61", "HS7-51", "HS7-34", "HS7-33", "HS7-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-33",
    name: "",
    intervals: [1, 1, 1, 1, 1, 2, 2, 3],
    parents: ["HS9-7", "HS9-9", "HS9-10", "HS9-11"],
    children: ["HS7-27", "HS7-47", "HS7-58", "HS7-62", "HS7-63", "HS7-34", "HS7-8", "HS7-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-34",
    name: "",
    intervals: [2, 2, 1, 1, 1, 1, 2, 2],
    parents: ["HS9-10", "HS9-12", "HS9-14"],
    children: ["HS7-13", "HS7-27", "HS7-63", "HS7-64", "HS7-65", "HS7-35", "HS7-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-35",
    name: "",
    intervals: [2, 1, 2, 1, 1, 1, 2, 2],
    parents: ["HS9-10", "HS9-11", "HS9-13", "HS9-18"],
    children: ["HS7-18", "HS7-47", "HS7-63", "HS7-60", "HS7-66", "HS7-65", "HS7-36", "HS7-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-36",
    name: "",
    intervals: [2, 1, 1, 2, 1, 1, 2, 2],
    parents: ["HS9-10", "HS9-12", "HS9-14", "HS9-19"],
    children: ["HS7-22", "HS7-58", "HS7-64", "HS7-60", "HS7-52", "HS7-37", "HS7-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-37",
    name: "",
    intervals: [2, 1, 1, 1, 2, 1, 2, 2],
    parents: ["HS9-10", "HS9-13", "HS9-15", "HS9-17"],
    children: ["HS7-25", "HS7-62", "HS7-65", "HS7-66", "HS7-52", "HS7-35", "HS7-38", "HS7-12"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-38",
    name: "Dominant & Dorian Bebop Modes",
    intervals: [2, 1, 2, 2, 1, 1, 1, 2],
    parents: ["HS9-11", "HS9-13", "HS9-15"],
    children: ["HS7-15", "HS7-38", "HS7-47", "HS7-24", "HS7-61", "HS7-66", "HS7-40"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-39",
    name: "",
    intervals: [1, 2, 1, 2, 1, 1, 2, 2],
    parents: ["HS9-11", "HS9-14", "HS9-16", "HS9-17"],
    children: ["HS7-42", "HS7-58", "HS7-44", "HS7-61", "HS7-53", "HS7-65", "HS7-41", "HS7-16"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-40",
    name: "Major & Harmonic/Natural Minor Bebop Modes",
    intervals: [1, 2, 1, 1, 2, 1, 2, 2],
    parents: ["HS9-11", "HS9-15", "HS9-17", "HS9-18"],
    children: ["HS7-45", "HS7-62", "HS7-56", "HS7-66", "HS7-53", "HS7-36", "HS7-42", "HS7-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-41",
    name: "",
    intervals: [2, 1, 1, 2, 2, 1, 1, 2],
    parents: ["HS9-12", "HS9-14"],
    children: ["HS7-20", "HS7-54", "HS7-64", "HS7-44"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-42",
    name: "Melodic Minor Bebop Modes",
    intervals: [2, 1, 1, 2, 1, 2, 1, 2],
    parents: ["HS9-12", "HS9-15", "HS9-16", "HS9-18"],
    children: ["HS7-21", "HS7-57", "HS7-65", "HS7-56", "HS7-40", "HS7-54", "HS7-37", "HS7-45"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS8-43",
    name: "Diminished/Octatonic Modes",
    intervals: [1, 2, 1, 2, 1, 2, 1, 2],
    parents: ["HS9-16"],
    children: ["HS7-41", "HS7-57"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS7-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 1, 6],
    parents: ["HS8-1", "HS8-2", "HS8-8", "HS8-9"],
    children: ["HS6-1", "HS6-2", "HS6-3", "HS6-4", "HS6-5", "HS6-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-2",
    name: "",
    intervals: [2, 1, 1, 1, 1, 1, 5],
    parents: ["HS8-1", "HS8-2", "HS8-3", "HS8-10", "HS8-15"],
    children: ["HS6-1", "HS6-7", "HS6-8", "HS6-9", "HS6-10", "HS6-11", "HS6-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-3",
    name: "",
    intervals: [1, 2, 1, 1, 1, 1, 5],
    parents: ["HS8-1", "HS8-3", "HS8-4", "HS8-11", "HS8-21"],
    children: ["HS6-2", "HS6-7", "HS6-12", "HS6-13", "HS6-14", "HS6-15", "HS6-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-4",
    name: "",
    intervals: [1, 1, 2, 1, 1, 1, 5],
    parents: ["HS8-1", "HS8-4", "HS8-5", "HS8-12", "HS8-26"],
    children: ["HS6-3", "HS6-8", "HS6-12", "HS6-16", "HS6-17", "HS6-18", "HS6-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-5",
    name: "",
    intervals: [1, 1, 1, 2, 1, 1, 5],
    parents: ["HS8-1", "HS8-5", "HS8-6", "HS8-13", "HS8-30"],
    children: ["HS6-4", "HS6-9", "HS6-13", "HS6-16", "HS6-19", "HS6-20", "HS6-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-6",
    name: "",
    intervals: [1, 1, 1, 1, 2, 1, 5],
    parents: ["HS8-1", "HS8-6", "HS8-7", "HS8-14", "HS8-32"],
    children: ["HS6-5", "HS6-10", "HS6-14", "HS6-17", "HS6-19", "HS6-21", "HS6-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-7",
    name: "",
    intervals: [1, 1, 1, 1, 1, 2, 5],
    parents: ["HS8-1", "HS8-7", "HS8-8", "HS8-15", "HS8-33"],
    children: ["HS6-6", "HS6-11", "HS6-15", "HS6-18", "HS6-20", "HS6-21", "HS6-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-8",
    name: "",
    intervals: [3, 1, 1, 1, 1, 1, 4],
    parents: ["HS8-2", "HS8-3", "HS8-9", "HS8-16", "HS8-33"],
    children: ["HS6-1", "HS6-22", "HS6-23", "HS6-24", "HS6-25", "HS6-26", "HS6-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-9",
    name: "",
    intervals: [2, 2, 1, 1, 1, 1, 4],
    parents: ["HS8-2", "HS8-4", "HS8-10", "HS8-17", "HS8-34"],
    children: ["HS6-2", "HS6-22", "HS6-27", "HS6-28", "HS6-29", "HS6-30", "HS6-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-10",
    name: "",
    intervals: [2, 1, 2, 1, 1, 1, 4],
    parents: ["HS8-2", "HS8-5", "HS8-11", "HS8-18", "HS8-35"],
    children: ["HS6-3", "HS6-23", "HS6-27", "HS6-31", "HS6-32", "HS6-33", "HS6-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-11",
    name: "",
    intervals: [2, 1, 1, 2, 1, 1, 4],
    parents: ["HS8-2", "HS8-6", "HS8-12", "HS8-19", "HS8-36"],
    children: ["HS6-4", "HS6-24", "HS6-28", "HS6-31", "HS6-34", "HS6-35", "HS6-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-12",
    name: "",
    intervals: [2, 1, 1, 1, 2, 1, 4],
    parents: ["HS8-2", "HS8-7", "HS8-13", "HS8-20", "HS8-37"],
    children: ["HS6-5", "HS6-25", "HS6-29", "HS6-32", "HS6-34", "HS6-36", "HS6-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-13",
    name: "",
    intervals: [2, 1, 1, 1, 1, 2, 4],
    parents: ["HS8-2", "HS8-8", "HS8-14", "HS8-21", "HS8-34"],
    children: ["HS6-6", "HS6-26", "HS6-30", "HS6-33", "HS6-35", "HS6-36", "HS6-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-14",
    name: "",
    intervals: [1, 3, 1, 1, 1, 1, 4],
    parents: ["HS8-3", "HS8-4", "HS8-16", "HS8-22", "HS8-31"],
    children: ["HS6-7", "HS6-22", "HS6-37", "HS6-38", "HS6-39", "HS6-40", "HS6-12"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-15",
    name: "",
    intervals: [1, 2, 2, 1, 1, 1, 4],
    parents: ["HS8-3", "HS8-5", "HS8-17", "HS8-23", "HS8-38"],
    children: ["HS6-8", "HS6-23", "HS6-37", "HS6-41", "HS6-42", "HS6-43", "HS6-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-16",
    name: "",
    intervals: [1, 2, 1, 2, 1, 1, 4],
    parents: ["HS8-3", "HS8-6", "HS8-18", "HS8-24", "HS8-39"],
    children: ["HS6-9", "HS6-24", "HS6-38", "HS6-41", "HS6-44", "HS6-45", "HS6-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-17",
    name: "",
    intervals: [1, 2, 1, 1, 2, 1, 4],
    parents: ["HS8-3", "HS8-7", "HS8-19", "HS8-25", "HS8-40"],
    children: ["HS6-10", "HS6-25", "HS6-39", "HS6-42", "HS6-44", "HS6-46", "HS6-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-18",
    name: "",
    intervals: [1, 2, 1, 1, 1, 2, 4],
    parents: ["HS8-3", "HS8-8", "HS8-20", "HS8-26", "HS8-35"],
    children: ["HS6-11", "HS6-26", "HS6-40", "HS6-43", "HS6-45", "HS6-46", "HS6-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-19",
    name: "",
    intervals: [1, 1, 3, 1, 1, 1, 4],
    parents: ["HS8-4", "HS8-5", "HS8-22", "HS8-27", "HS8-28"],
    children: ["HS6-12", "HS6-27", "HS6-37", "HS6-47", "HS6-48", "HS6-49", "HS6-16"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-20",
    name: "",
    intervals: [1, 1, 2, 2, 1, 1, 4],
    parents: ["HS8-4", "HS8-6", "HS8-23", "HS8-28", "HS8-41"],
    children: ["HS6-13", "HS6-28", "HS6-38", "HS6-47", "HS6-50", "HS6-51", "HS6-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-21",
    name: "",
    intervals: [1, 1, 2, 1, 2, 1, 4],
    parents: ["HS8-4", "HS8-7", "HS8-24", "HS8-29", "HS8-42"],
    children: ["HS6-14", "HS6-29", "HS6-39", "HS6-48", "HS6-50", "HS6-52", "HS6-18"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-22",
    name: "",
    intervals: [1, 1, 2, 1, 1, 2, 4],
    parents: ["HS8-4", "HS8-8", "HS8-25", "HS8-30", "HS8-36"],
    children: ["HS6-15", "HS6-30", "HS6-40", "HS6-49", "HS6-51", "HS6-52", "HS6-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-23",
    name: "",
    intervals: [1, 1, 1, 3, 1, 1, 4],
    parents: ["HS8-5", "HS8-6", "HS8-22", "HS8-23", "HS8-27"],
    children: ["HS6-16", "HS6-31", "HS6-41", "HS6-47", "HS6-37", "HS6-53", "HS6-19"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-24",
    name: "",
    intervals: [1, 1, 1, 2, 2, 1, 4],
    parents: ["HS8-5", "HS8-7", "HS8-28", "HS8-31", "HS8-38"],
    children: ["HS6-17", "HS6-32", "HS6-42", "HS6-48", "HS6-37", "HS6-54", "HS6-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-25",
    name: "",
    intervals: [1, 1, 1, 2, 1, 2, 4],
    parents: ["HS8-5", "HS8-8", "HS8-29", "HS8-32", "HS8-37"],
    children: ["HS6-18", "HS6-33", "HS6-43", "HS6-49", "HS6-53", "HS6-54", "HS6-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-26",
    name: "",
    intervals: [1, 1, 1, 1, 3, 1, 4],
    parents: ["HS8-6", "HS8-7", "HS8-16", "HS8-17", "HS8-22"],
    children: ["HS6-19", "HS6-34", "HS6-44", "HS6-50", "HS6-37", "HS6-22", "HS6-21"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-27",
    name: "",
    intervals: [1, 1, 1, 1, 2, 2, 4],
    parents: ["HS8-6", "HS8-8", "HS8-31", "HS8-33", "HS8-34"],
    children: ["HS6-20", "HS6-35", "HS6-45", "HS6-51", "HS6-53", "HS6-22", "HS6-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-28",
    name: "",
    intervals: [1, 1, 1, 1, 1, 3, 4],
    parents: ["HS8-7", "HS8-8", "HS8-9", "HS8-10", "HS8-16"],
    children: ["HS6-21", "HS6-36", "HS6-46", "HS6-52", "HS6-54", "HS6-22", "HS6-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-29",
    name: "",
    intervals: [2, 1, 1, 1, 1, 3, 3],
    parents: ["HS8-9", "HS8-11", "HS8-14", "HS8-15", "HS8-17"],
    children: ["HS6-21", "HS6-55", "HS6-56", "HS6-57", "HS6-58", "HS6-23", "HS6-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-30",
    name: "",
    intervals: [3, 1, 2, 1, 1, 1, 3],
    parents: ["HS8-9", "HS8-12", "HS8-18", "HS8-20", "HS8-21"],
    children: ["HS6-3", "HS6-36", "HS6-55", "HS6-59", "HS6-60", "HS6-61", "HS6-24"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-31",
    name: "",
    intervals: [3, 1, 1, 2, 1, 1, 3],
    parents: ["HS8-9", "HS8-13", "HS8-19", "HS8-25", "HS8-26"],
    children: ["HS6-4", "HS6-46", "HS6-56", "HS6-59", "HS6-62", "HS6-63", "HS6-25"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-32",
    name: "",
    intervals: [3, 1, 1, 1, 2, 1, 3],
    parents: ["HS8-9", "HS8-14", "HS8-20", "HS8-29", "HS8-30"],
    children: ["HS6-5", "HS6-52", "HS6-57", "HS6-60", "HS6-62", "HS6-55", "HS6-26"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-33",
    name: "",
    intervals: [3, 1, 1, 1, 1, 2, 3],
    parents: ["HS8-9", "HS8-15", "HS8-21", "HS8-31", "HS8-32"],
    children: ["HS6-6", "HS6-54", "HS6-58", "HS6-61", "HS6-63", "HS6-55", "HS6-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-34",
    name: "",
    intervals: [2, 3, 1, 1, 1, 1, 3],
    parents: ["HS8-10", "HS8-11", "HS8-22", "HS8-32", "HS8-33"],
    children: ["HS6-7", "HS6-21", "HS6-53", "HS6-64", "HS6-65", "HS6-66", "HS6-27"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-35",
    name: "",
    intervals: [2, 2, 2, 1, 1, 1, 3],
    parents: ["HS8-10", "HS8-12", "HS8-23", "HS8-34", "HS8-37"],
    children: ["HS6-8", "HS6-36", "HS6-53", "HS6-67", "HS6-68", "HS6-69", "HS6-28"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-36",
    name: "",
    intervals: [2, 2, 1, 2, 1, 1, 3],
    parents: ["HS8-10", "HS8-13", "HS8-24", "HS8-35", "HS8-40"],
    children: ["HS6-9", "HS6-46", "HS6-64", "HS6-67", "HS6-70", "HS6-71", "HS6-29"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-37",
    name: "",
    intervals: [2, 2, 1, 1, 2, 1, 3],
    parents: ["HS8-10", "HS8-14", "HS8-25", "HS8-36", "HS8-42"],
    children: ["HS6-10", "HS6-52", "HS6-65", "HS6-68", "HS6-70", "HS6-56", "HS6-30"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-38",
    name: "",
    intervals: [2, 2, 1, 1, 1, 2, 3],
    parents: ["HS8-10", "HS8-15", "HS8-26", "HS8-37", "HS8-38"],
    children: ["HS6-11", "HS6-54", "HS6-66", "HS6-69", "HS6-71", "HS6-56", "HS6-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-39",
    name: "",
    intervals: [2, 1, 3, 1, 1, 1, 3],
    parents: ["HS8-11", "HS8-12", "HS8-27", "HS8-29", "HS8-31"],
    children: ["HS6-12", "HS6-55", "HS6-53", "HS6-48", "HS6-72", "HS6-73", "HS6-31"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-40",
    name: "",
    intervals: [2, 1, 2, 2, 1, 1, 3],
    parents: ["HS8-11", "HS8-13", "HS8-28", "HS8-38", "HS8-42"],
    children: ["HS6-13", "HS6-56", "HS6-64", "HS6-48", "HS6-74", "HS6-75", "HS6-32"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-41",
    name: "",
    intervals: [2, 1, 2, 1, 2, 1, 3],
    parents: ["HS8-11", "HS8-14", "HS8-29", "HS8-39", "HS8-43"],
    children: ["HS6-14", "HS6-57", "HS6-65", "HS6-72", "HS6-74", "HS6-33"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS7-42",
    name: "",
    intervals: [2, 1, 2, 1, 1, 2, 3],
    parents: ["HS8-11", "HS8-15", "HS8-30", "HS8-39", "HS8-40"],
    children: ["HS6-15", "HS6-58", "HS6-66", "HS6-73", "HS6-75", "HS6-57", "HS6-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-43",
    name: "",
    intervals: [2, 1, 1, 3, 1, 1, 3],
    parents: ["HS8-12", "HS8-13", "HS8-22", "HS8-24", "HS8-28"],
    children: ["HS6-16", "HS6-59", "HS6-67", "HS6-48", "HS6-38", "HS6-64", "HS6-34"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-44",
    name: "",
    intervals: [2, 1, 1, 2, 2, 1, 3],
    parents: ["HS8-12", "HS8-14", "HS8-31", "HS8-39", "HS8-41"],
    children: ["HS6-17", "HS6-60", "HS6-68", "HS6-72", "HS6-38", "HS6-58", "HS6-35"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-45",
    name: "",
    intervals: [2, 1, 1, 2, 1, 2, 3],
    parents: ["HS8-12", "HS8-15", "HS8-32", "HS8-40", "HS8-42"],
    children: ["HS6-18", "HS6-61", "HS6-69", "HS6-73", "HS6-64", "HS6-58", "HS6-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-46",
    name: "",
    intervals: [2, 1, 1, 1, 3, 1, 3],
    parents: ["HS8-13", "HS8-14", "HS8-16", "HS8-18", "HS8-23"],
    children: ["HS6-19", "HS6-62", "HS6-70", "HS6-74", "HS6-38", "HS6-23", "HS6-36"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-47",
    name: "",
    intervals: [2, 1, 1, 1, 2, 2, 3],
    parents: ["HS8-13", "HS8-15", "HS8-33", "HS8-35", "HS8-38"],
    children: ["HS6-20", "HS6-63", "HS6-71", "HS6-75", "HS6-64", "HS6-23", "HS6-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-48",
    name: "",
    intervals: [1, 2, 1, 1, 3, 1, 3],
    parents: ["HS8-16", "HS8-19", "HS8-20", "HS8-24"],
    children: ["HS6-34", "HS6-62", "HS6-76", "HS6-77", "HS6-39", "HS6-24", "HS6-46"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-49",
    name: "",
    intervals: [1, 3, 1, 1, 2, 1, 3],
    parents: ["HS8-16", "HS8-20", "HS8-24", "HS8-25"],
    children: ["HS6-25", "HS6-52", "HS6-44", "HS6-70", "HS6-76", "HS6-59", "HS6-40"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-50",
    name: "",
    intervals: [1, 3, 1, 1, 1, 2, 3],
    parents: ["HS8-16", "HS8-21", "HS8-26", "HS8-28", "HS8-29"],
    children: ["HS6-26", "HS6-54", "HS6-50", "HS6-74", "HS6-77", "HS6-59", "HS6-12"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-51",
    name: "",
    intervals: [1, 2, 3, 1, 1, 1, 3],
    parents: ["HS8-17", "HS8-18", "HS8-27", "HS8-30", "HS8-32"],
    children: ["HS6-27", "HS6-55", "HS6-19", "HS6-49", "HS6-73", "HS6-78", "HS6-41"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-52",
    name: "",
    intervals: [1, 2, 2, 2, 1, 1, 3],
    parents: ["HS8-17", "HS8-19", "HS8-28", "HS8-36", "HS8-37"],
    children: ["HS6-28", "HS6-56", "HS6-34", "HS6-49", "HS6-77", "HS6-79", "HS6-42"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-53",
    name: "Harmonic Major Modes",
    intervals: [1, 2, 2, 1, 2, 1, 3],
    parents: ["HS8-17", "HS8-20", "HS8-29", "HS8-39", "HS8-40"],
    children: ["HS6-29", "HS6-57", "HS6-44", "HS6-73", "HS6-77", "HS6-60", "HS6-43"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS7-54",
    name: "",
    intervals: [1, 2, 2, 1, 1, 2, 3],
    parents: ["HS8-17", "HS8-21", "HS8-30", "HS8-41", "HS8-42"],
    children: ["HS6-30", "HS6-58", "HS6-50", "HS6-78", "HS6-79", "HS6-60", "HS6-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-55",
    name: "",
    intervals: [1, 2, 1, 3, 1, 1, 3],
    parents: ["HS8-18", "HS8-19", "HS8-22", "HS8-25", "HS8-29"],
    children: ["HS6-31", "HS6-59", "HS6-62", "HS6-49", "HS6-39", "HS6-65", "HS6-44"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-56",
    name: "Harmonic Minor Modes",
    intervals: [1, 2, 1, 2, 2, 1, 3],
    parents: ["HS8-18", "HS8-20", "HS8-31", "HS8-40", "HS8-42"],
    children: ["HS6-32", "HS6-60", "HS6-70", "HS6-73", "HS6-39", "HS6-61", "HS6-45"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS7-57",
    name: "",
    intervals: [1, 2, 1, 2, 1, 2, 3],
    parents: ["HS8-18", "HS8-21", "HS8-32", "HS8-42", "HS8-43"],
    children: ["HS6-33", "HS6-61", "HS6-74", "HS6-78", "HS6-65", "HS6-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS7-58",
    name: "",
    intervals: [1, 2, 1, 1, 2, 2, 3],
    parents: ["HS8-19", "HS8-21", "HS8-33", "HS8-36", "HS8-39"],
    children: ["HS6-35", "HS6-63", "HS6-77", "HS6-79", "HS6-65", "HS6-24", "HS6-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-59",
    name: "",
    intervals: [1, 1, 2, 3, 1, 1, 3],
    parents: ["HS8-22", "HS8-23", "HS8-24", "HS8-26", "HS8-30"],
    children: ["HS6-41", "HS6-67", "HS6-62", "HS6-16", "HS6-40", "HS6-66", "HS6-50"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-60",
    name: "",
    intervals: [1, 1, 2, 2, 2, 1, 3],
    parents: ["HS8-23", "HS8-25", "HS8-31", "HS8-35", "HS8-36"],
    children: ["HS6-42", "HS6-68", "HS6-70", "HS6-31", "HS6-40", "HS6-63", "HS6-51"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-61",
    name: "",
    intervals: [1, 1, 2, 2, 1, 2, 3],
    parents: ["HS8-23", "HS8-26", "HS8-32", "HS8-38", "HS8-39"],
    children: ["HS6-43", "HS6-69", "HS6-74", "HS6-41", "HS6-66", "HS6-63", "HS6-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-62",
    name: "",
    intervals: [1, 1, 2, 1, 2, 2, 3],
    parents: ["HS8-24", "HS8-26", "HS8-33", "HS8-37", "HS8-40"],
    children: ["HS6-45", "HS6-71", "HS6-77", "HS6-67", "HS6-66", "HS6-25", "HS6-18"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-63",
    name: "",
    intervals: [1, 1, 1, 2, 2, 2, 3],
    parents: ["HS8-28", "HS8-30", "HS8-33", "HS8-34", "HS8-35"],
    children: ["HS6-51", "HS6-75", "HS6-79", "HS6-67", "HS6-27", "HS6-26", "HS6-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-64",
    name: "",
    intervals: [2, 2, 1, 1, 2, 2, 2],
    parents: ["HS8-34", "HS8-36", "HS8-41"],
    children: ["HS6-35", "HS6-51", "HS6-79", "HS6-80", "HS6-68", "HS6-28", "HS6-30"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS7-65",
    name: "Melodic Minor Modes",
    intervals: [2, 1, 2, 1, 2, 2, 2],
    parents: ["HS8-34", "HS8-35", "HS8-37", "HS8-39", "HS8-42"],
    children: ["HS6-45", "HS6-75", "HS6-79", "HS6-68", "HS6-69", "HS6-29", "HS6-33"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS7-66",
    name: "Major Modes",
    intervals: [2, 1, 2, 2, 1, 2, 2],
    parents: ["HS8-35", "HS8-37", "HS8-38", "HS8-40"],
    children: ["HS6-43", "HS6-71", "HS6-75", "HS6-42", "HS6-69", "HS6-32"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS6-1",
    name: "",
    intervals: [1, 1, 1, 1, 1, 7],
    parents: ["HS7-1", "HS7-2", "HS7-7", "HS7-8", "HS7-28"],
    children: ["HS5-1", "HS5-2", "HS5-3", "HS5-4", "HS5-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-2",
    name: "",
    intervals: [2, 1, 1, 1, 1, 6],
    parents: ["HS7-1", "HS7-2", "HS7-3", "HS7-9", "HS7-13", "HS7-29"],
    children: ["HS5-1", "HS5-6", "HS5-7", "HS5-8", "HS5-9", "HS5-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-3",
    name: "",
    intervals: [1, 2, 1, 1, 1, 6],
    parents: ["HS7-1", "HS7-3", "HS7-4", "HS7-10", "HS7-18", "HS7-30"],
    children: ["HS5-2", "HS5-6", "HS5-10", "HS5-11", "HS5-12", "HS5-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-4",
    name: "",
    intervals: [1, 1, 2, 1, 1, 6],
    parents: ["HS7-1", "HS7-4", "HS7-5", "HS7-11", "HS7-22", "HS7-31"],
    children: ["HS5-3", "HS5-7", "HS5-10", "HS5-13", "HS5-14", "HS5-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-5",
    name: "",
    intervals: [1, 1, 1, 2, 1, 6],
    parents: ["HS7-1", "HS7-5", "HS7-6", "HS7-12", "HS7-25", "HS7-32"],
    children: ["HS5-4", "HS5-8", "HS5-11", "HS5-13", "HS5-15", "HS5-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-6",
    name: "",
    intervals: [1, 1, 1, 1, 2, 6],
    parents: ["HS7-1", "HS7-6", "HS7-7", "HS7-13", "HS7-27", "HS7-33"],
    children: ["HS5-5", "HS5-9", "HS5-12", "HS5-14", "HS5-15", "HS5-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-7",
    name: "",
    intervals: [3, 1, 1, 1, 1, 5],
    parents: ["HS7-2", "HS7-3", "HS7-8", "HS7-14", "HS7-33", "HS7-34"],
    children: ["HS5-1", "HS5-16", "HS5-17", "HS5-18", "HS5-19", "HS5-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-8",
    name: "",
    intervals: [2, 2, 1, 1, 1, 5],
    parents: ["HS7-2", "HS7-4", "HS7-9", "HS7-15", "HS7-35", "HS7-38"],
    children: ["HS5-2", "HS5-16", "HS5-20", "HS5-21", "HS5-22", "HS5-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-9",
    name: "",
    intervals: [2, 1, 2, 1, 1, 5],
    parents: ["HS7-2", "HS7-5", "HS7-10", "HS7-16", "HS7-36", "HS7-42"],
    children: ["HS5-3", "HS5-17", "HS5-20", "HS5-23", "HS5-24", "HS5-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-10",
    name: "",
    intervals: [2, 1, 1, 2, 1, 5],
    parents: ["HS7-2", "HS7-6", "HS7-11", "HS7-17", "HS7-37", "HS7-45"],
    children: ["HS5-4", "HS5-18", "HS5-21", "HS5-23", "HS5-25", "HS5-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-11",
    name: "",
    intervals: [2, 1, 1, 1, 2, 5],
    parents: ["HS7-2", "HS7-7", "HS7-12", "HS7-18", "HS7-38", "HS7-47"],
    children: ["HS5-5", "HS5-19", "HS5-22", "HS5-24", "HS5-25", "HS5-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-12",
    name: "",
    intervals: [1, 3, 1, 1, 1, 5],
    parents: ["HS7-3", "HS7-4", "HS7-14", "HS7-19", "HS7-39", "HS7-50"],
    children: ["HS5-6", "HS5-16", "HS5-26", "HS5-27", "HS5-28", "HS5-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-13",
    name: "",
    intervals: [1, 2, 2, 1, 1, 5],
    parents: ["HS7-3", "HS7-5", "HS7-15", "HS7-20", "HS7-40", "HS7-54"],
    children: ["HS5-7", "HS5-17", "HS5-26", "HS5-29", "HS5-30", "HS5-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-14",
    name: "",
    intervals: [1, 2, 1, 2, 1, 5],
    parents: ["HS7-3", "HS7-6", "HS7-16", "HS7-21", "HS7-41", "HS7-57"],
    children: ["HS5-8", "HS5-18", "HS5-27", "HS5-29", "HS5-31", "HS5-12"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-15",
    name: "",
    intervals: [1, 2, 1, 1, 2, 5],
    parents: ["HS7-3", "HS7-7", "HS7-17", "HS7-22", "HS7-42", "HS7-58"],
    children: ["HS5-9", "HS5-19", "HS5-28", "HS5-30", "HS5-31", "HS5-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-16",
    name: "",
    intervals: [1, 1, 3, 1, 1, 5],
    parents: ["HS7-4", "HS7-5", "HS7-19", "HS7-23", "HS7-43", "HS7-59"],
    children: ["HS5-10", "HS5-20", "HS5-26", "HS5-32", "HS5-33", "HS5-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-17",
    name: "",
    intervals: [1, 1, 2, 2, 1, 5],
    parents: ["HS7-4", "HS7-6", "HS7-20", "HS7-24", "HS7-44", "HS7-61"],
    children: ["HS5-11", "HS5-21", "HS5-27", "HS5-32", "HS5-34", "HS5-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-18",
    name: "",
    intervals: [1, 1, 2, 1, 2, 5],
    parents: ["HS7-4", "HS7-7", "HS7-21", "HS7-25", "HS7-45", "HS7-62"],
    children: ["HS5-12", "HS5-22", "HS5-28", "HS5-33", "HS5-34", "HS5-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-19",
    name: "",
    intervals: [1, 1, 1, 3, 1, 5],
    parents: ["HS7-5", "HS7-6", "HS7-23", "HS7-26", "HS7-46", "HS7-51"],
    children: ["HS5-13", "HS5-23", "HS5-29", "HS5-32", "HS5-35", "HS5-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-20",
    name: "",
    intervals: [1, 1, 1, 2, 2, 5],
    parents: ["HS7-5", "HS7-7", "HS7-24", "HS7-27", "HS7-47", "HS7-63"],
    children: ["HS5-14", "HS5-24", "HS5-30", "HS5-33", "HS5-35", "HS5-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-21",
    name: "",
    intervals: [1, 1, 1, 1, 3, 5],
    parents: ["HS7-6", "HS7-7", "HS7-26", "HS7-28", "HS7-29", "HS7-34"],
    children: ["HS5-15", "HS5-25", "HS5-31", "HS5-34", "HS5-35", "HS5-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-22",
    name: "",
    intervals: [4, 1, 1, 1, 1, 4],
    parents: ["HS7-8", "HS7-9", "HS7-14", "HS7-26", "HS7-27", "HS7-28"],
    children: ["HS5-1", "HS5-35", "HS5-36", "HS5-37", "HS5-38", "HS5-16"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-23",
    name: "",
    intervals: [3, 2, 1, 1, 1, 4],
    parents: ["HS7-8", "HS7-10", "HS7-15", "HS7-29", "HS7-46", "HS7-47"],
    children: ["HS5-2", "HS5-35", "HS5-39", "HS5-40", "HS5-41", "HS5-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-24",
    name: "",
    intervals: [3, 1, 2, 1, 1, 4],
    parents: ["HS7-8", "HS7-11", "HS7-16", "HS7-30", "HS7-48", "HS7-58"],
    children: ["HS5-3", "HS5-36", "HS5-39", "HS5-42", "HS5-43", "HS5-18"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-25",
    name: "",
    intervals: [3, 1, 1, 2, 1, 4],
    parents: ["HS7-8", "HS7-12", "HS7-17", "HS7-31", "HS7-49", "HS7-62"],
    children: ["HS5-4", "HS5-37", "HS5-40", "HS5-42", "HS5-44", "HS5-19"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-26",
    name: "",
    intervals: [3, 1, 1, 1, 2, 4],
    parents: ["HS7-8", "HS7-13", "HS7-18", "HS7-32", "HS7-50", "HS7-63"],
    children: ["HS5-5", "HS5-38", "HS5-41", "HS5-43", "HS5-44", "HS5-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-27",
    name: "",
    intervals: [2, 3, 1, 1, 1, 4],
    parents: ["HS7-9", "HS7-10", "HS7-19", "HS7-34", "HS7-51", "HS7-63"],
    children: ["HS5-6", "HS5-35", "HS5-45", "HS5-46", "HS5-47", "HS5-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-28",
    name: "",
    intervals: [2, 2, 2, 1, 1, 4],
    parents: ["HS7-9", "HS7-11", "HS7-20", "HS7-35", "HS7-52", "HS7-64"],
    children: ["HS5-7", "HS5-36", "HS5-45", "HS5-48", "HS5-49", "HS5-21"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-29",
    name: "Altered Hexatonic Modes",
    intervals: [2, 2, 1, 2, 1, 4],
    parents: ["HS7-9", "HS7-12", "HS7-21", "HS7-36", "HS7-53", "HS7-65"],
    children: ["HS5-8", "HS5-37", "HS5-46", "HS5-48", "HS5-50", "HS5-22"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-30",
    name: "",
    intervals: [2, 2, 1, 1, 2, 4],
    parents: ["HS7-9", "HS7-13", "HS7-22", "HS7-37", "HS7-54", "HS7-64"],
    children: ["HS5-9", "HS5-38", "HS5-47", "HS5-49", "HS5-50", "HS5-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-31",
    name: "",
    intervals: [2, 1, 3, 1, 1, 4],
    parents: ["HS7-10", "HS7-11", "HS7-23", "HS7-39", "HS7-55", "HS7-60"],
    children: ["HS5-10", "HS5-39", "HS5-45", "HS5-51", "HS5-52", "HS5-23"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-32",
    name: "",
    intervals: [2, 1, 2, 2, 1, 4],
    parents: ["HS7-10", "HS7-12", "HS7-24", "HS7-40", "HS7-56", "HS7-66"],
    children: ["HS5-11", "HS5-40", "HS5-46", "HS5-51", "HS5-53", "HS5-24"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-33",
    name: "",
    intervals: [2, 1, 2, 1, 2, 4],
    parents: ["HS7-10", "HS7-13", "HS7-25", "HS7-41", "HS7-57", "HS7-65"],
    children: ["HS5-12", "HS5-41", "HS5-47", "HS5-52", "HS5-53", "HS5-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-34",
    name: "",
    intervals: [2, 1, 1, 3, 1, 4],
    parents: ["HS7-11", "HS7-12", "HS7-26", "HS7-43", "HS7-48", "HS7-52"],
    children: ["HS5-13", "HS5-42", "HS5-48", "HS5-51", "HS5-36", "HS5-25"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-35",
    name: "",
    intervals: [2, 1, 1, 2, 2, 4],
    parents: ["HS7-11", "HS7-13", "HS7-27", "HS7-44", "HS7-58", "HS7-64"],
    children: ["HS5-14", "HS5-43", "HS5-49", "HS5-52", "HS5-36", "HS5-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-36",
    name: "",
    intervals: [2, 1, 1, 1, 3, 4],
    parents: ["HS7-12", "HS7-13", "HS7-28", "HS7-30", "HS7-35", "HS7-46"],
    children: ["HS5-15", "HS5-44", "HS5-50", "HS5-53", "HS5-36", "HS5-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-37",
    name: "",
    intervals: [1, 4, 1, 1, 1, 4],
    parents: ["HS7-14", "HS7-15", "HS7-19", "HS7-23", "HS7-24", "HS7-26"],
    children: ["HS5-16", "HS5-35", "HS5-32", "HS5-51", "HS5-54", "HS5-26"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-38",
    name: "",
    intervals: [1, 3, 2, 1, 1, 4],
    parents: ["HS7-14", "HS7-16", "HS7-20", "HS7-43", "HS7-44", "HS7-46"],
    children: ["HS5-17", "HS5-36", "HS5-32", "HS5-55", "HS5-56", "HS5-27"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-39",
    name: "",
    intervals: [1, 3, 1, 2, 1, 4],
    parents: ["HS7-14", "HS7-17", "HS7-21", "HS7-48", "HS7-55", "HS7-56"],
    children: ["HS5-18", "HS5-37", "HS5-51", "HS5-55", "HS5-57", "HS5-28"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-40",
    name: "",
    intervals: [1, 3, 1, 1, 2, 4],
    parents: ["HS7-14", "HS7-18", "HS7-22", "HS7-49", "HS7-59", "HS7-60"],
    children: ["HS5-19", "HS5-38", "HS5-54", "HS5-56", "HS5-57", "HS5-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-41",
    name: "",
    intervals: [1, 2, 3, 1, 1, 4],
    parents: ["HS7-15", "HS7-16", "HS7-23", "HS7-51", "HS7-59", "HS7-61"],
    children: ["HS5-20", "HS5-39", "HS5-32", "HS5-54", "HS5-58", "HS5-29"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-42",
    name: "",
    intervals: [1, 2, 2, 2, 1, 4],
    parents: ["HS7-15", "HS7-17", "HS7-24", "HS7-52", "HS7-60", "HS7-66"],
    children: ["HS5-21", "HS5-40", "HS5-51", "HS5-54", "HS5-59", "HS5-30"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-43",
    name: "",
    intervals: [1, 2, 2, 1, 2, 4],
    parents: ["HS7-15", "HS7-18", "HS7-25", "HS7-53", "HS7-61", "HS7-66"],
    children: ["HS5-22", "HS5-41", "HS5-54", "HS5-58", "HS5-59", "HS5-11"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-44",
    name: "",
    intervals: [1, 2, 1, 3, 1, 4],
    parents: ["HS7-16", "HS7-17", "HS7-26", "HS7-49", "HS7-53", "HS7-55"],
    children: ["HS5-23", "HS5-42", "HS5-55", "HS5-54", "HS5-37", "HS5-31"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-45",
    name: "",
    intervals: [1, 2, 1, 2, 2, 4],
    parents: ["HS7-16", "HS7-18", "HS7-27", "HS7-56", "HS7-62", "HS7-65"],
    children: ["HS5-24", "HS5-43", "HS5-56", "HS5-58", "HS5-37", "HS5-12"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-46",
    name: "",
    intervals: [1, 2, 1, 1, 3, 4],
    parents: ["HS7-17", "HS7-18", "HS7-28", "HS7-31", "HS7-36", "HS7-48"],
    children: ["HS5-25", "HS5-44", "HS5-57", "HS5-59", "HS5-37", "HS5-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-47",
    name: "",
    intervals: [1, 1, 4, 1, 1, 4],
    parents: ["HS7-19", "HS7-20", "HS7-23"],
    children: ["HS5-26", "HS5-45", "HS5-32"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-48",
    name: "",
    intervals: [1, 1, 3, 2, 1, 4],
    parents: ["HS7-19", "HS7-21", "HS7-24", "HS7-39", "HS7-40", "HS7-43"],
    children: ["HS5-27", "HS5-46", "HS5-51", "HS5-26", "HS5-60", "HS5-33"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-49",
    name: "",
    intervals: [1, 1, 3, 1, 2, 4],
    parents: ["HS7-19", "HS7-22", "HS7-25", "HS7-51", "HS7-52", "HS7-55"],
    children: ["HS5-28", "HS5-47", "HS5-54", "HS5-45", "HS5-60", "HS5-13"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-50",
    name: "",
    intervals: [1, 1, 2, 3, 1, 4],
    parents: ["HS7-20", "HS7-21", "HS7-26", "HS7-50", "HS7-54", "HS7-59"],
    children: ["HS5-29", "HS5-48", "HS5-55", "HS5-26", "HS5-38", "HS5-34"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-51",
    name: "",
    intervals: [1, 1, 2, 2, 2, 4],
    parents: ["HS7-20", "HS7-22", "HS7-27", "HS7-60", "HS7-63", "HS7-64"],
    children: ["HS5-30", "HS5-49", "HS5-56", "HS5-45", "HS5-38", "HS5-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-52",
    name: "",
    intervals: [1, 1, 2, 1, 3, 4],
    parents: ["HS7-21", "HS7-22", "HS7-28", "HS7-32", "HS7-37", "HS7-49"],
    children: ["HS5-31", "HS5-50", "HS5-57", "HS5-60", "HS5-38", "HS5-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-53",
    name: "",
    intervals: [1, 1, 1, 3, 2, 4],
    parents: ["HS7-23", "HS7-25", "HS7-27", "HS7-34", "HS7-35", "HS7-39"],
    children: ["HS5-33", "HS5-52", "HS5-58", "HS5-45", "HS5-16", "HS5-15"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-54",
    name: "",
    intervals: [1, 1, 1, 2, 3, 4],
    parents: ["HS7-24", "HS7-25", "HS7-28", "HS7-33", "HS7-38", "HS7-50"],
    children: ["HS5-34", "HS5-53", "HS5-59", "HS5-60", "HS5-16", "HS5-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-55",
    name: "",
    intervals: [3, 1, 1, 1, 3, 3],
    parents: ["HS7-29", "HS7-30", "HS7-32", "HS7-33", "HS7-39", "HS7-51"],
    children: ["HS5-15", "HS5-60", "HS5-61", "HS5-62", "HS5-39", "HS5-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-56",
    name: "",
    intervals: [2, 2, 1, 1, 3, 3],
    parents: ["HS7-29", "HS7-31", "HS7-37", "HS7-38", "HS7-40", "HS7-52"],
    children: ["HS5-25", "HS5-60", "HS5-63", "HS5-64", "HS5-40", "HS5-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-57",
    name: "",
    intervals: [2, 1, 2, 1, 3, 3],
    parents: ["HS7-29", "HS7-32", "HS7-41", "HS7-42", "HS7-53"],
    children: ["HS5-31", "HS5-61", "HS5-63", "HS5-41", "HS5-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-58",
    name: "",
    intervals: [2, 1, 1, 2, 3, 3],
    parents: ["HS7-29", "HS7-33", "HS7-42", "HS7-44", "HS7-45", "HS7-54"],
    children: ["HS5-34", "HS5-62", "HS5-64", "HS5-61", "HS5-17", "HS5-9"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-59",
    name: "",
    intervals: [1, 3, 1, 1, 3, 3],
    parents: ["HS7-30", "HS7-31", "HS7-43", "HS7-49", "HS7-50", "HS7-55"],
    children: ["HS5-44", "HS5-60", "HS5-55", "HS5-65", "HS5-42", "HS5-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-60",
    name: "",
    intervals: [1, 2, 2, 1, 3, 3],
    parents: ["HS7-30", "HS7-32", "HS7-44", "HS7-53", "HS7-54", "HS7-56"],
    children: ["HS5-50", "HS5-61", "HS5-55", "HS5-62", "HS5-43", "HS5-11"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-61",
    name: "",
    intervals: [3, 1, 2, 1, 2, 3],
    parents: ["HS7-30", "HS7-33", "HS7-45", "HS7-56", "HS7-57"],
    children: ["HS5-12", "HS5-53", "HS5-62", "HS5-65", "HS5-18"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-62",
    name: "",
    intervals: [3, 1, 1, 3, 1, 3],
    parents: ["HS7-31", "HS7-32", "HS7-46", "HS7-48", "HS7-55", "HS7-59"],
    children: ["HS5-13", "HS5-57", "HS5-63", "HS5-55", "HS5-39", "HS5-44"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-63",
    name: "",
    intervals: [3, 1, 1, 2, 2, 3],
    parents: ["HS7-31", "HS7-33", "HS7-47", "HS7-58", "HS7-60", "HS7-61"],
    children: ["HS5-14", "HS5-59", "HS5-64", "HS5-65", "HS5-39", "HS5-19"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-64",
    name: "Blues Modes",
    intervals: [2, 3, 2, 1, 1, 3],
    parents: ["HS7-34", "HS7-36", "HS7-40", "HS7-43", "HS7-45", "HS7-47"],
    children: ["HS5-17", "HS5-25", "HS5-33", "HS5-65", "HS5-66", "HS5-46"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-65",
    name: "",
    intervals: [2, 3, 1, 2, 1, 3],
    parents: ["HS7-34", "HS7-37", "HS7-41", "HS7-55", "HS7-57", "HS7-58"],
    children: ["HS5-18", "HS5-31", "HS5-52", "HS5-65", "HS5-63", "HS5-47"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-66",
    name: "",
    intervals: [2, 3, 1, 1, 2, 3],
    parents: ["HS7-34", "HS7-38", "HS7-42", "HS7-59", "HS7-61", "HS7-62"],
    children: ["HS5-19", "HS5-34", "HS5-58", "HS5-66", "HS5-63", "HS5-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-67",
    name: "",
    intervals: [2, 2, 3, 1, 1, 3],
    parents: ["HS7-35", "HS7-36", "HS7-43", "HS7-59", "HS7-62", "HS7-63"],
    children: ["HS5-20", "HS5-44", "HS5-33", "HS5-56", "HS5-66", "HS5-48"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS6-68",
    name: "",
    intervals: [2, 2, 2, 2, 1, 3],
    parents: ["HS7-35", "HS7-37", "HS7-44", "HS7-60", "HS7-64", "HS7-65"],
    children: ["HS5-21", "HS5-50", "HS5-52", "HS5-56", "HS5-64", "HS5-49"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-69",
    name: "",
    intervals: [2, 2, 2, 1, 2, 3],
    parents: ["HS7-35", "HS7-38", "HS7-45", "HS7-61", "HS7-65", "HS7-66"],
    children: ["HS5-22", "HS5-53", "HS5-58", "HS5-66", "HS5-64", "HS5-21"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-70",
    name: "",
    intervals: [2, 2, 1, 3, 1, 3],
    parents: ["HS7-36", "HS7-37", "HS7-46", "HS7-49", "HS7-56", "HS7-60"],
    children: ["HS5-23", "HS5-57", "HS5-65", "HS5-56", "HS5-40", "HS5-50"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-71",
    name: "",
    intervals: [2, 2, 1, 2, 2, 3],
    parents: ["HS7-36", "HS7-38", "HS7-47", "HS7-62", "HS7-66"],
    children: ["HS5-24", "HS5-59", "HS5-66", "HS5-40", "HS5-22"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-72",
    name: "",
    intervals: [2, 1, 3, 2, 1, 3],
    parents: ["HS7-39", "HS7-41", "HS7-44"],
    children: ["HS5-27", "HS5-61", "HS5-52"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-73",
    name: "",
    intervals: [2, 1, 3, 1, 2, 3],
    parents: ["HS7-39", "HS7-42", "HS7-45", "HS7-51", "HS7-53", "HS7-56"],
    children: ["HS5-28", "HS5-62", "HS5-58", "HS5-46", "HS5-61", "HS5-23"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-74",
    name: "",
    intervals: [2, 1, 2, 3, 1, 3],
    parents: ["HS7-40", "HS7-41", "HS7-46", "HS7-50", "HS7-57", "HS7-61"],
    children: ["HS5-29", "HS5-63", "HS5-65", "HS5-27", "HS5-41", "HS5-53"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-75",
    name: "",
    intervals: [2, 1, 2, 2, 2, 3],
    parents: ["HS7-40", "HS7-42", "HS7-47", "HS7-63", "HS7-65", "HS7-66"],
    children: ["HS5-30", "HS5-64", "HS5-66", "HS5-46", "HS5-41", "HS5-24"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-76",
    name: "Augmented Modes",
    intervals: [1, 3, 1, 3, 1, 3],
    parents: ["HS7-48", "HS7-49"],
    children: ["HS5-42", "HS5-57"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS6-77",
    name: "",
    intervals: [1, 2, 2, 3, 1, 3],
    parents: ["HS7-48", "HS7-50", "HS7-52", "HS7-53", "HS7-58", "HS7-62"],
    children: ["HS5-48", "HS5-63", "HS5-42", "HS5-28", "HS5-43", "HS5-59"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-78",
    name: "",
    intervals: [1, 2, 3, 1, 2, 3],
    parents: ["HS7-51", "HS7-54", "HS7-57"],
    children: ["HS5-47", "HS5-62", "HS5-29"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-79",
    name: "",
    intervals: [1, 2, 2, 2, 2, 3],
    parents: ["HS7-52", "HS7-54", "HS7-58", "HS7-63", "HS7-64", "HS7-65"],
    children: ["HS5-49", "HS5-64", "HS5-48", "HS5-47", "HS5-43", "HS5-30"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS6-80",
    name: "Whole Tone Scale",
    intervals: [2, 2, 2, 2, 2, 2],
    parents: ["HS7-64"],
    children: ["HS5-49"],
    root: 0,
    contiguousSemitones: false,
    saturated: true
}, {
    id: "HS5-1",
    name: "",
    intervals: [1, 1, 1, 1, 8],
    parents: ["HS6-1", "HS6-2", "HS6-6", "HS6-7", "HS6-21", "HS6-22"],
    children: ["HS4-1", "HS4-2", "HS4-3", "HS4-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-2",
    name: "",
    intervals: [2, 1, 1, 1, 7],
    parents: ["HS6-1", "HS6-2", "HS6-3", "HS6-8", "HS6-11", "HS6-23", "HS6-36"],
    children: ["HS4-1", "HS4-5", "HS4-6", "HS4-7", "HS4-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-3",
    name: "",
    intervals: [1, 2, 1, 1, 7],
    parents: ["HS6-1", "HS6-3", "HS6-4", "HS6-9", "HS6-15", "HS6-24", "HS6-46"],
    children: ["HS4-2", "HS4-5", "HS4-8", "HS4-9", "HS4-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-4",
    name: "",
    intervals: [1, 1, 2, 1, 7],
    parents: ["HS6-1", "HS6-4", "HS6-5", "HS6-10", "HS6-18", "HS6-25", "HS6-52"],
    children: ["HS4-3", "HS4-6", "HS4-8", "HS4-10", "HS4-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-5",
    name: "",
    intervals: [1, 1, 1, 2, 7],
    parents: ["HS6-1", "HS6-5", "HS6-6", "HS6-11", "HS6-20", "HS6-26", "HS6-54"],
    children: ["HS4-4", "HS4-7", "HS4-9", "HS4-10", "HS4-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-6",
    name: "",
    intervals: [3, 1, 1, 1, 6],
    parents: ["HS6-2", "HS6-3", "HS6-7", "HS6-12", "HS6-26", "HS6-27", "HS6-55"],
    children: ["HS4-1", "HS4-11", "HS4-12", "HS4-13", "HS4-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-7",
    name: "",
    intervals: [2, 2, 1, 1, 6],
    parents: ["HS6-2", "HS6-4", "HS6-8", "HS6-13", "HS6-28", "HS6-30", "HS6-56"],
    children: ["HS4-2", "HS4-11", "HS4-14", "HS4-15", "HS4-6"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-8",
    name: "",
    intervals: [2, 1, 2, 1, 6],
    parents: ["HS6-2", "HS6-5", "HS6-9", "HS6-14", "HS6-29", "HS6-33", "HS6-57"],
    children: ["HS4-3", "HS4-12", "HS4-14", "HS4-16", "HS4-7"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-9",
    name: "",
    intervals: [2, 1, 1, 2, 6],
    parents: ["HS6-2", "HS6-6", "HS6-10", "HS6-15", "HS6-30", "HS6-35", "HS6-58"],
    children: ["HS4-4", "HS4-13", "HS4-15", "HS4-16", "HS4-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-10",
    name: "",
    intervals: [1, 3, 1, 1, 6],
    parents: ["HS6-3", "HS6-4", "HS6-12", "HS6-16", "HS6-31", "HS6-40", "HS6-59"],
    children: ["HS4-5", "HS4-11", "HS4-17", "HS4-18", "HS4-8"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-11",
    name: "",
    intervals: [1, 2, 2, 1, 6],
    parents: ["HS6-3", "HS6-5", "HS6-13", "HS6-17", "HS6-32", "HS6-43", "HS6-60"],
    children: ["HS4-6", "HS4-12", "HS4-17", "HS4-19", "HS4-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-12",
    name: "",
    intervals: [1, 2, 1, 2, 6],
    parents: ["HS6-3", "HS6-6", "HS6-14", "HS6-18", "HS6-33", "HS6-45", "HS6-61"],
    children: ["HS4-7", "HS4-13", "HS4-18", "HS4-19", "HS4-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-13",
    name: "",
    intervals: [1, 1, 3, 1, 6],
    parents: ["HS6-4", "HS6-5", "HS6-16", "HS6-19", "HS6-34", "HS6-49", "HS6-62"],
    children: ["HS4-8", "HS4-14", "HS4-17", "HS4-20", "HS4-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-14",
    name: "",
    intervals: [1, 1, 2, 2, 6],
    parents: ["HS6-4", "HS6-6", "HS6-17", "HS6-20", "HS6-35", "HS6-51", "HS6-63"],
    children: ["HS4-9", "HS4-15", "HS4-18", "HS4-20", "HS4-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-15",
    name: "",
    intervals: [1, 1, 1, 3, 6],
    parents: ["HS6-5", "HS6-6", "HS6-19", "HS6-21", "HS6-36", "HS6-53", "HS6-55"],
    children: ["HS4-10", "HS4-16", "HS4-19", "HS4-20", "HS4-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-16",
    name: "",
    intervals: [4, 1, 1, 1, 5],
    parents: ["HS6-7", "HS6-8", "HS6-12", "HS6-22", "HS6-37", "HS6-53", "HS6-54"],
    children: ["HS4-1", "HS4-21", "HS4-22", "HS4-23", "HS4-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-17",
    name: "",
    intervals: [3, 2, 1, 1, 5],
    parents: ["HS6-7", "HS6-9", "HS6-13", "HS6-23", "HS6-38", "HS6-58", "HS6-64"],
    children: ["HS4-2", "HS4-21", "HS4-24", "HS4-25", "HS4-12"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-18",
    name: "",
    intervals: [3, 1, 2, 1, 5],
    parents: ["HS6-7", "HS6-10", "HS6-14", "HS6-24", "HS6-39", "HS6-61", "HS6-65"],
    children: ["HS4-3", "HS4-22", "HS4-24", "HS4-26", "HS4-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-19",
    name: "",
    intervals: [3, 1, 1, 2, 5],
    parents: ["HS6-7", "HS6-11", "HS6-15", "HS6-25", "HS6-40", "HS6-63", "HS6-66"],
    children: ["HS4-4", "HS4-23", "HS4-25", "HS4-26", "HS4-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-20",
    name: "",
    intervals: [2, 3, 1, 1, 5],
    parents: ["HS6-8", "HS6-9", "HS6-16", "HS6-27", "HS6-41", "HS6-66", "HS6-67"],
    children: ["HS4-5", "HS4-21", "HS4-27", "HS4-28", "HS4-14"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-21",
    name: "",
    intervals: [2, 2, 2, 1, 5],
    parents: ["HS6-8", "HS6-10", "HS6-17", "HS6-28", "HS6-42", "HS6-68", "HS6-69"],
    children: ["HS4-6", "HS4-22", "HS4-27", "HS4-29", "HS4-15"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-22",
    name: "",
    intervals: [2, 2, 1, 2, 5],
    parents: ["HS6-8", "HS6-11", "HS6-18", "HS6-29", "HS6-43", "HS6-69", "HS6-71"],
    children: ["HS4-7", "HS4-23", "HS4-28", "HS4-29", "HS4-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-23",
    name: "",
    intervals: [2, 1, 3, 1, 5],
    parents: ["HS6-9", "HS6-10", "HS6-19", "HS6-31", "HS6-44", "HS6-70", "HS6-73"],
    children: ["HS4-8", "HS4-24", "HS4-27", "HS4-30", "HS4-16"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-24",
    name: "",
    intervals: [2, 1, 2, 2, 5],
    parents: ["HS6-9", "HS6-11", "HS6-20", "HS6-32", "HS6-45", "HS6-71", "HS6-75"],
    children: ["HS4-9", "HS4-25", "HS4-28", "HS4-30", "HS4-7"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-25",
    name: "",
    intervals: [2, 1, 1, 3, 5],
    parents: ["HS6-10", "HS6-11", "HS6-21", "HS6-34", "HS6-46", "HS6-56", "HS6-64"],
    children: ["HS4-10", "HS4-26", "HS4-29", "HS4-30", "HS4-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-26",
    name: "",
    intervals: [1, 4, 1, 1, 5],
    parents: ["HS6-12", "HS6-13", "HS6-16", "HS6-37", "HS6-47", "HS6-48", "HS6-50"],
    children: ["HS4-11", "HS4-21", "HS4-31", "HS4-32", "HS4-17"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-27",
    name: "",
    intervals: [1, 3, 2, 1, 5],
    parents: ["HS6-12", "HS6-14", "HS6-17", "HS6-38", "HS6-48", "HS6-72", "HS6-74"],
    children: ["HS4-12", "HS4-22", "HS4-31", "HS4-33", "HS4-18"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-28",
    name: "",
    intervals: [1, 3, 1, 2, 5],
    parents: ["HS6-12", "HS6-15", "HS6-18", "HS6-39", "HS6-49", "HS6-73", "HS6-77"],
    children: ["HS4-13", "HS4-23", "HS4-32", "HS4-33", "HS4-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-29",
    name: "",
    intervals: [1, 2, 3, 1, 5],
    parents: ["HS6-13", "HS6-14", "HS6-19", "HS6-41", "HS6-50", "HS6-74", "HS6-78"],
    children: ["HS4-14", "HS4-24", "HS4-31", "HS4-34", "HS4-19"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-30",
    name: "",
    intervals: [1, 2, 2, 2, 5],
    parents: ["HS6-13", "HS6-15", "HS6-20", "HS6-42", "HS6-51", "HS6-75", "HS6-79"],
    children: ["HS4-15", "HS4-25", "HS4-32", "HS4-34", "HS4-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-31",
    name: "",
    intervals: [1, 2, 1, 3, 5],
    parents: ["HS6-14", "HS6-15", "HS6-21", "HS6-44", "HS6-52", "HS6-57", "HS6-65"],
    children: ["HS4-16", "HS4-26", "HS4-33", "HS4-34", "HS4-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-32",
    name: "",
    intervals: [1, 1, 4, 1, 5],
    parents: ["HS6-16", "HS6-17", "HS6-19", "HS6-37", "HS6-38", "HS6-41", "HS6-47"],
    children: ["HS4-17", "HS4-27", "HS4-31", "HS4-21", "HS4-20"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-33",
    name: "",
    intervals: [1, 1, 3, 2, 5],
    parents: ["HS6-16", "HS6-18", "HS6-20", "HS6-48", "HS6-53", "HS6-64", "HS6-67"],
    children: ["HS4-18", "HS4-28", "HS4-32", "HS4-21", "HS4-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-34",
    name: "",
    intervals: [1, 1, 2, 3, 5],
    parents: ["HS6-17", "HS6-18", "HS6-21", "HS6-50", "HS6-54", "HS6-58", "HS6-66"],
    children: ["HS4-19", "HS4-29", "HS4-33", "HS4-21", "HS4-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-35",
    name: "",
    intervals: [1, 1, 1, 4, 5],
    parents: ["HS6-19", "HS6-20", "HS6-21", "HS6-22", "HS6-23", "HS6-27", "HS6-37"],
    children: ["HS4-20", "HS4-30", "HS4-34", "HS4-21", "HS4-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-36",
    name: "",
    intervals: [2, 1, 1, 4, 4],
    parents: ["HS6-22", "HS6-24", "HS6-28", "HS6-34", "HS6-35", "HS6-36", "HS6-38"],
    children: ["HS4-20", "HS4-35", "HS4-36", "HS4-22", "HS4-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-37",
    name: "",
    intervals: [4, 1, 2, 1, 4],
    parents: ["HS6-22", "HS6-25", "HS6-29", "HS6-39", "HS6-44", "HS6-45", "HS6-46"],
    children: ["HS4-3", "HS4-30", "HS4-35", "HS4-37", "HS4-23"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-38",
    name: "",
    intervals: [4, 1, 1, 2, 4],
    parents: ["HS6-22", "HS6-26", "HS6-30", "HS6-40", "HS6-50", "HS6-51", "HS6-52"],
    children: ["HS4-4", "HS4-34", "HS4-36", "HS4-37", "HS4-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-39",
    name: "",
    intervals: [3, 3, 1, 1, 4],
    parents: ["HS6-23", "HS6-24", "HS6-31", "HS6-41", "HS6-55", "HS6-62", "HS6-63"],
    children: ["HS4-5", "HS4-20", "HS4-38", "HS4-39", "HS4-24"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-40",
    name: "",
    intervals: [3, 2, 2, 1, 4],
    parents: ["HS6-23", "HS6-25", "HS6-32", "HS6-42", "HS6-56", "HS6-70", "HS6-71"],
    children: ["HS4-6", "HS4-30", "HS4-38", "HS4-40", "HS4-25"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-41",
    name: "",
    intervals: [3, 2, 1, 2, 4],
    parents: ["HS6-23", "HS6-26", "HS6-33", "HS6-43", "HS6-57", "HS6-74", "HS6-75"],
    children: ["HS4-7", "HS4-34", "HS4-39", "HS4-40", "HS4-12"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-42",
    name: "",
    intervals: [3, 1, 3, 1, 4],
    parents: ["HS6-24", "HS6-25", "HS6-34", "HS6-44", "HS6-59", "HS6-76", "HS6-77"],
    children: ["HS4-8", "HS4-35", "HS4-38", "HS4-26"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-43",
    name: "",
    intervals: [3, 1, 2, 2, 4],
    parents: ["HS6-24", "HS6-26", "HS6-35", "HS6-45", "HS6-60", "HS6-77", "HS6-79"],
    children: ["HS4-9", "HS4-36", "HS4-39", "HS4-35", "HS4-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-44",
    name: "",
    intervals: [3, 1, 1, 3, 4],
    parents: ["HS6-25", "HS6-26", "HS6-36", "HS6-46", "HS6-59", "HS6-62", "HS6-67"],
    children: ["HS4-10", "HS4-37", "HS4-40", "HS4-35", "HS4-5"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-45",
    name: "",
    intervals: [2, 4, 1, 1, 4],
    parents: ["HS6-27", "HS6-28", "HS6-31", "HS6-47", "HS6-49", "HS6-51", "HS6-53"],
    children: ["HS4-11", "HS4-20", "HS4-32", "HS4-41", "HS4-27"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-46",
    name: "",
    intervals: [2, 3, 2, 1, 4],
    parents: ["HS6-27", "HS6-29", "HS6-32", "HS6-48", "HS6-64", "HS6-73", "HS6-75"],
    children: ["HS4-12", "HS4-30", "HS4-32", "HS4-42", "HS4-28"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-47",
    name: "",
    intervals: [2, 3, 1, 2, 4],
    parents: ["HS6-27", "HS6-30", "HS6-33", "HS6-49", "HS6-65", "HS6-78", "HS6-79"],
    children: ["HS4-13", "HS4-34", "HS4-41", "HS4-42", "HS4-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-48",
    name: "",
    intervals: [2, 2, 3, 1, 4],
    parents: ["HS6-28", "HS6-29", "HS6-34", "HS6-50", "HS6-67", "HS6-77", "HS6-79"],
    children: ["HS4-14", "HS4-35", "HS4-32", "HS4-36", "HS4-29"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-49",
    name: "",
    intervals: [2, 2, 2, 2, 4],
    parents: ["HS6-28", "HS6-30", "HS6-35", "HS6-51", "HS6-68", "HS6-79", "HS6-80"],
    children: ["HS4-15", "HS4-36", "HS4-41"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-50",
    name: "",
    intervals: [2, 2, 1, 3, 4],
    parents: ["HS6-29", "HS6-30", "HS6-36", "HS6-52", "HS6-60", "HS6-68", "HS6-70"],
    children: ["HS4-16", "HS4-37", "HS4-42", "HS4-36", "HS4-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-51",
    name: "",
    intervals: [2, 1, 4, 1, 4],
    parents: ["HS6-31", "HS6-32", "HS6-34", "HS6-37", "HS6-39", "HS6-42", "HS6-48"],
    children: ["HS4-17", "HS4-38", "HS4-32", "HS4-22", "HS4-30"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-52",
    name: "",
    intervals: [2, 1, 3, 2, 4],
    parents: ["HS6-31", "HS6-33", "HS6-35", "HS6-53", "HS6-65", "HS6-68", "HS6-72"],
    children: ["HS4-18", "HS4-39", "HS4-41", "HS4-22", "HS4-16"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-53",
    name: "",
    intervals: [2, 1, 2, 3, 4],
    parents: ["HS6-32", "HS6-33", "HS6-36", "HS6-54", "HS6-61", "HS6-69", "HS6-74"],
    children: ["HS4-19", "HS4-40", "HS4-42", "HS4-22", "HS4-7"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-54",
    name: "",
    intervals: [1, 2, 4, 1, 4],
    parents: ["HS6-37", "HS6-40", "HS6-41", "HS6-42", "HS6-43", "HS6-44", "HS6-49"],
    children: ["HS4-27", "HS4-38", "HS4-17", "HS4-23", "HS4-34"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-55",
    name: "",
    intervals: [1, 3, 3, 1, 4],
    parents: ["HS6-38", "HS6-39", "HS6-44", "HS6-50", "HS6-59", "HS6-60", "HS6-62"],
    children: ["HS4-24", "HS4-35", "HS4-17", "HS4-37", "HS4-33"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-56",
    name: "",
    intervals: [1, 3, 2, 2, 4],
    parents: ["HS6-38", "HS6-40", "HS6-45", "HS6-51", "HS6-67", "HS6-68", "HS6-70"],
    children: ["HS4-25", "HS4-36", "HS4-27", "HS4-37", "HS4-18"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-57",
    name: "",
    intervals: [1, 3, 1, 3, 4],
    parents: ["HS6-39", "HS6-40", "HS6-46", "HS6-52", "HS6-62", "HS6-70", "HS6-76"],
    children: ["HS4-26", "HS4-37", "HS4-38", "HS4-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-58",
    name: "",
    intervals: [1, 2, 3, 2, 4],
    parents: ["HS6-41", "HS6-43", "HS6-45", "HS6-53", "HS6-66", "HS6-69", "HS6-73"],
    children: ["HS4-28", "HS4-39", "HS4-27", "HS4-23", "HS4-19"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-59",
    name: "",
    intervals: [1, 2, 2, 3, 4],
    parents: ["HS6-42", "HS6-43", "HS6-46", "HS6-54", "HS6-63", "HS6-71", "HS6-77"],
    children: ["HS4-29", "HS4-40", "HS4-38", "HS4-23", "HS4-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-60",
    name: "",
    intervals: [1, 1, 3, 3, 4],
    parents: ["HS6-48", "HS6-49", "HS6-52", "HS6-54", "HS6-55", "HS6-56", "HS6-59"],
    children: ["HS4-33", "HS4-42", "HS4-38", "HS4-11", "HS4-10"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS5-61",
    name: "",
    intervals: [3, 2, 1, 3, 3],
    parents: ["HS6-55", "HS6-57", "HS6-58", "HS6-60", "HS6-72", "HS6-73"],
    children: ["HS4-16", "HS4-33", "HS4-43", "HS4-39", "HS4-12"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-62",
    name: "",
    intervals: [3, 1, 2, 3, 3],
    parents: ["HS6-55", "HS6-58", "HS6-60", "HS6-61", "HS6-73", "HS6-78"],
    children: ["HS4-19", "HS4-42", "HS4-43", "HS4-24", "HS4-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-63",
    name: "",
    intervals: [2, 3, 1, 3, 3],
    parents: ["HS6-56", "HS6-57", "HS6-62", "HS6-65", "HS6-66", "HS6-74", "HS6-77"],
    children: ["HS4-26", "HS4-33", "HS4-39", "HS4-40", "HS4-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-64",
    name: "",
    intervals: [2, 2, 2, 3, 3],
    parents: ["HS6-56", "HS6-58", "HS6-63", "HS6-68", "HS6-69", "HS6-75", "HS6-79"],
    children: ["HS4-29", "HS4-42", "HS4-39", "HS4-25", "HS4-15"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-65",
    name: "",
    intervals: [3, 1, 3, 2, 3],
    parents: ["HS6-59", "HS6-61", "HS6-63", "HS6-64", "HS6-65", "HS6-70", "HS6-74"],
    children: ["HS4-18", "HS4-40", "HS4-42", "HS4-24", "HS4-26"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS5-66",
    name: "Pentatonic Modes",
    intervals: [2, 2, 3, 2, 3],
    parents: ["HS6-64", "HS6-66", "HS6-67", "HS6-69", "HS6-71", "HS6-75"],
    children: ["HS4-28", "HS4-40", "HS4-25", "HS4-29"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-1",
    name: "",
    intervals: [1, 1, 1, 9],
    parents: ["HS5-1", "HS5-2", "HS5-5", "HS5-6", "HS5-15", "HS5-16", "HS5-35"],
    children: ["HS3-1", "HS3-2", "HS3-3"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-2",
    name: "",
    intervals: [2, 1, 1, 8],
    parents: ["HS5-1", "HS5-2", "HS5-3", "HS5-7", "HS5-9", "HS5-17", "HS5-25", "HS5-36"],
    children: ["HS3-1", "HS3-4", "HS3-5", "HS3-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-3",
    name: "",
    intervals: [1, 2, 1, 8],
    parents: ["HS5-1", "HS5-3", "HS5-4", "HS5-8", "HS5-12", "HS5-18", "HS5-31", "HS5-37"],
    children: ["HS3-2", "HS3-4", "HS3-6", "HS3-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-4",
    name: "",
    intervals: [1, 1, 2, 8],
    parents: ["HS5-1", "HS5-4", "HS5-5", "HS5-9", "HS5-14", "HS5-19", "HS5-34", "HS5-38"],
    children: ["HS3-3", "HS3-5", "HS3-6", "HS3-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-5",
    name: "",
    intervals: [3, 1, 1, 7],
    parents: ["HS5-2", "HS5-3", "HS5-6", "HS5-10", "HS5-19", "HS5-20", "HS5-39", "HS5-44"],
    children: ["HS3-1", "HS3-7", "HS3-8", "HS3-4"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-6",
    name: "",
    intervals: [2, 2, 1, 7],
    parents: ["HS5-2", "HS5-4", "HS5-7", "HS5-11", "HS5-21", "HS5-22", "HS5-40", "HS5-50"],
    children: ["HS3-2", "HS3-7", "HS3-9", "HS3-5"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-7",
    name: "",
    intervals: [2, 1, 2, 7],
    parents: ["HS5-2", "HS5-5", "HS5-8", "HS5-12", "HS5-22", "HS5-24", "HS5-41", "HS5-53"],
    children: ["HS3-3", "HS3-8", "HS3-9", "HS3-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-8",
    name: "",
    intervals: [1, 3, 1, 7],
    parents: ["HS5-3", "HS5-4", "HS5-10", "HS5-13", "HS5-23", "HS5-28", "HS5-42", "HS5-57"],
    children: ["HS3-4", "HS3-7", "HS3-10", "HS3-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-9",
    name: "",
    intervals: [1, 2, 2, 7],
    parents: ["HS5-3", "HS5-5", "HS5-11", "HS5-14", "HS5-24", "HS5-30", "HS5-43", "HS5-59"],
    children: ["HS3-5", "HS3-8", "HS3-10", "HS3-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-10",
    name: "",
    intervals: [1, 1, 3, 7],
    parents: ["HS5-4", "HS5-5", "HS5-13", "HS5-15", "HS5-25", "HS5-33", "HS5-44", "HS5-60"],
    children: ["HS3-6", "HS3-9", "HS3-10", "HS3-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-11",
    name: "",
    intervals: [4, 1, 1, 6],
    parents: ["HS5-6", "HS5-7", "HS5-10", "HS5-16", "HS5-26", "HS5-38", "HS5-45", "HS5-60"],
    children: ["HS3-1", "HS3-11", "HS3-12", "HS3-7"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-12",
    name: "",
    intervals: [3, 2, 1, 6],
    parents: ["HS5-6", "HS5-8", "HS5-11", "HS5-17", "HS5-27", "HS5-41", "HS5-46", "HS5-61"],
    children: ["HS3-2", "HS3-11", "HS3-13", "HS3-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-13",
    name: "",
    intervals: [3, 1, 2, 6],
    parents: ["HS5-6", "HS5-9", "HS5-12", "HS5-18", "HS5-28", "HS5-43", "HS5-47", "HS5-62"],
    children: ["HS3-3", "HS3-12", "HS3-13", "HS3-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-14",
    name: "",
    intervals: [2, 3, 1, 6],
    parents: ["HS5-7", "HS5-8", "HS5-13", "HS5-20", "HS5-29", "HS5-47", "HS5-48", "HS5-63"],
    children: ["HS3-4", "HS3-11", "HS3-14", "HS3-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-15",
    name: "",
    intervals: [2, 2, 2, 6],
    parents: ["HS5-7", "HS5-9", "HS5-14", "HS5-21", "HS5-30", "HS5-49", "HS5-64"],
    children: ["HS3-5", "HS3-12", "HS3-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-16",
    name: "",
    intervals: [2, 1, 3, 6],
    parents: ["HS5-8", "HS5-9", "HS5-15", "HS5-23", "HS5-31", "HS5-50", "HS5-52", "HS5-61"],
    children: ["HS3-6", "HS3-13", "HS3-14", "HS3-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-17",
    name: "",
    intervals: [1, 4, 1, 6],
    parents: ["HS5-10", "HS5-11", "HS5-13", "HS5-26", "HS5-32", "HS5-51", "HS5-54", "HS5-55"],
    children: ["HS3-7", "HS3-11", "HS3-15", "HS3-10"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-18",
    name: "",
    intervals: [1, 3, 2, 6],
    parents: ["HS5-10", "HS5-12", "HS5-14", "HS5-27", "HS5-33", "HS5-52", "HS5-56", "HS5-65"],
    children: ["HS3-8", "HS3-12", "HS3-15", "HS3-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-19",
    name: "",
    intervals: [1, 2, 3, 6],
    parents: ["HS5-11", "HS5-12", "HS5-15", "HS5-29", "HS5-34", "HS5-53", "HS5-58", "HS5-62"],
    children: ["HS3-9", "HS3-13", "HS3-15", "HS3-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-20",
    name: "",
    intervals: [1, 1, 4, 6],
    parents: ["HS5-13", "HS5-14", "HS5-15", "HS5-32", "HS5-35", "HS5-36", "HS5-39", "HS5-45"],
    children: ["HS3-10", "HS3-14", "HS3-15", "HS3-1"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-21",
    name: "",
    intervals: [5, 1, 1, 5],
    parents: ["HS5-16", "HS5-17", "HS5-20", "HS5-26", "HS5-32", "HS5-33", "HS5-34", "HS5-35"],
    children: ["HS3-1", "HS3-15", "HS3-16", "HS3-11"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS4-22",
    name: "",
    intervals: [4, 2, 1, 5],
    parents: ["HS5-16", "HS5-18", "HS5-21", "HS5-27", "HS5-36", "HS5-51", "HS5-52", "HS5-53"],
    children: ["HS3-2", "HS3-15", "HS3-17", "HS3-12"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-23",
    name: "",
    intervals: [4, 1, 2, 5],
    parents: ["HS5-16", "HS5-19", "HS5-22", "HS5-28", "HS5-37", "HS5-54", "HS5-58", "HS5-59"],
    children: ["HS3-3", "HS3-16", "HS3-17", "HS3-7"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-24",
    name: "",
    intervals: [3, 3, 1, 5],
    parents: ["HS5-17", "HS5-18", "HS5-23", "HS5-29", "HS5-39", "HS5-55", "HS5-62", "HS5-65"],
    children: ["HS3-4", "HS3-15", "HS3-18", "HS3-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-25",
    name: "",
    intervals: [3, 2, 2, 5],
    parents: ["HS5-17", "HS5-19", "HS5-24", "HS5-30", "HS5-40", "HS5-56", "HS5-64", "HS5-66"],
    children: ["HS3-5", "HS3-16", "HS3-18", "HS3-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-26",
    name: "",
    intervals: [3, 1, 3, 5],
    parents: ["HS5-18", "HS5-19", "HS5-25", "HS5-31", "HS5-42", "HS5-57", "HS5-63", "HS5-65"],
    children: ["HS3-6", "HS3-17", "HS3-18", "HS3-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-27",
    name: "",
    intervals: [2, 4, 1, 5],
    parents: ["HS5-20", "HS5-21", "HS5-23", "HS5-32", "HS5-45", "HS5-54", "HS5-56", "HS5-58"],
    children: ["HS3-7", "HS3-15", "HS3-16", "HS3-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-28",
    name: "",
    intervals: [2, 3, 2, 5],
    parents: ["HS5-20", "HS5-22", "HS5-24", "HS5-33", "HS5-46", "HS5-58", "HS5-66"],
    children: ["HS3-8", "HS3-16", "HS3-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-29",
    name: "",
    intervals: [2, 2, 3, 5],
    parents: ["HS5-21", "HS5-22", "HS5-25", "HS5-34", "HS5-48", "HS5-59", "HS5-64", "HS5-66"],
    children: ["HS3-9", "HS3-17", "HS3-16", "HS3-5"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-30",
    name: "Minor add 9",
    intervals: [2, 1, 4, 5],
    parents: ["HS5-23", "HS5-24", "HS5-25", "HS5-35", "HS5-37", "HS5-40", "HS5-46", "HS5-51"],
    children: ["HS3-10", "HS3-18", "HS3-16", "HS3-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-31",
    name: "",
    intervals: [1, 5, 1, 5],
    parents: ["HS5-26", "HS5-27", "HS5-29", "HS5-32"],
    children: ["HS3-11", "HS3-15"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-32",
    name: "Major 7 (♭5)",
    intervals: [1, 4, 2, 5],
    parents: ["HS5-26", "HS5-28", "HS5-30", "HS5-33", "HS5-45", "HS5-46", "HS5-48", "HS5-51"],
    children: ["HS3-12", "HS3-16", "HS3-11", "HS3-10"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-33",
    name: "Diminished Major 7",
    intervals: [1, 3, 3, 5],
    parents: ["HS5-27", "HS5-28", "HS5-31", "HS5-34", "HS5-55", "HS5-60", "HS5-61", "HS5-63"],
    children: ["HS3-13", "HS3-17", "HS3-11", "HS3-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-34",
    name: "",
    intervals: [1, 2, 4, 5],
    parents: ["HS5-29", "HS5-30", "HS5-31", "HS5-35", "HS5-38", "HS5-41", "HS5-47", "HS5-54"],
    children: ["HS3-14", "HS3-18", "HS3-11", "HS3-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-35",
    name: "Augmented Major 7 / Major add ♭13",
    intervals: [3, 1, 4, 4],
    parents: ["HS5-36", "HS5-37", "HS5-42", "HS5-43", "HS5-44", "HS5-48", "HS5-55"],
    children: ["HS3-10", "HS3-19", "HS3-17", "HS3-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-36",
    name: "Augmented 7 / Dominant 7 (♯5)",
    intervals: [2, 2, 4, 4],
    parents: ["HS5-36", "HS5-38", "HS5-43", "HS5-48", "HS5-49", "HS5-50", "HS5-56"],
    children: ["HS3-14", "HS3-19", "HS3-12", "HS3-5"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-37",
    name: "Minor Major 7",
    intervals: [4, 1, 3, 4],
    parents: ["HS5-37", "HS5-38", "HS5-44", "HS5-50", "HS5-55", "HS5-56", "HS5-57"],
    children: ["HS3-6", "HS3-18", "HS3-19", "HS3-7"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-38",
    name: "Major 7 / Minor add 6",
    intervals: [3, 4, 1, 4],
    parents: ["HS5-39", "HS5-40", "HS5-42", "HS5-51", "HS5-54", "HS5-57", "HS5-59", "HS5-60"],
    children: ["HS3-7", "HS3-10", "HS3-17", "HS3-18"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-39",
    name: "Dominant 7",
    intervals: [3, 3, 2, 4],
    parents: ["HS5-39", "HS5-41", "HS5-43", "HS5-52", "HS5-58", "HS5-61", "HS5-63", "HS5-64"],
    children: ["HS3-8", "HS3-14", "HS3-17", "HS3-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-40",
    name: "Minor 7 / Major 6",
    intervals: [3, 2, 3, 4],
    parents: ["HS5-40", "HS5-41", "HS5-44", "HS5-53", "HS5-59", "HS5-63", "HS5-65", "HS5-66"],
    children: ["HS3-9", "HS3-18", "HS3-17", "HS3-8"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-41",
    name: "Dominant 7 (♭5)",
    intervals: [2, 4, 2, 4],
    parents: ["HS5-45", "HS5-47", "HS5-49", "HS5-52"],
    children: ["HS3-12", "HS3-14"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-42",
    name: "Half-diminished / Minor 7 (♭5)",
    intervals: [2, 3, 3, 4],
    parents: ["HS5-46", "HS5-47", "HS5-50", "HS5-53", "HS5-60", "HS5-62", "HS5-64", "HS5-65"],
    children: ["HS3-13", "HS3-18", "HS3-12", "HS3-9"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS4-43",
    name: "Diminished 7",
    intervals: [3, 3, 3, 3],
    parents: ["HS5-61", "HS5-62"],
    children: ["HS3-13"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-1",
    name: "",
    intervals: [1, 1, 10],
    parents: ["HS4-1", "HS4-2", "HS4-4", "HS4-5", "HS4-10", "HS4-11", "HS4-20", "HS4-21"],
    children: ["HS2-1", "HS2-2"],
    root: 0,
    contiguousSemitones: true
}, {
    id: "HS3-2",
    name: "",
    intervals: [2, 1, 9],
    parents: ["HS4-1", "HS4-2", "HS4-3", "HS4-6", "HS4-7", "HS4-12", "HS4-16", "HS4-22", "HS4-30"],
    children: ["HS2-1", "HS2-3", "HS2-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-3",
    name: "",
    intervals: [1, 2, 9],
    parents: ["HS4-1", "HS4-3", "HS4-4", "HS4-7", "HS4-9", "HS4-13", "HS4-19", "HS4-23", "HS4-34"],
    children: ["HS2-2", "HS2-3", "HS2-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-4",
    name: "",
    intervals: [3, 1, 8],
    parents: ["HS4-2", "HS4-3", "HS4-5", "HS4-8", "HS4-13", "HS4-14", "HS4-24", "HS4-26", "HS4-35"],
    children: ["HS2-1", "HS2-4", "HS2-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-5",
    name: "",
    intervals: [2, 2, 8],
    parents: ["HS4-2", "HS4-4", "HS4-6", "HS4-9", "HS4-15", "HS4-25", "HS4-29", "HS4-36"],
    children: ["HS2-2", "HS2-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-6",
    name: "",
    intervals: [1, 3, 8],
    parents: ["HS4-3", "HS4-4", "HS4-8", "HS4-10", "HS4-16", "HS4-18", "HS4-26", "HS4-33", "HS4-37"],
    children: ["HS2-3", "HS2-4", "HS2-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-7",
    name: "",
    intervals: [4, 1, 7],
    parents: ["HS4-5", "HS4-6", "HS4-8", "HS4-11", "HS4-17", "HS4-23", "HS4-27", "HS4-37", "HS4-38"],
    children: ["HS2-1", "HS2-5", "HS2-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-8",
    name: "",
    intervals: [3, 2, 7],
    parents: ["HS4-5", "HS4-7", "HS4-9", "HS4-12", "HS4-18", "HS4-25", "HS4-28", "HS4-39", "HS4-40"],
    children: ["HS2-2", "HS2-5", "HS2-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-9",
    name: "",
    intervals: [2, 3, 7],
    parents: ["HS4-6", "HS4-7", "HS4-10", "HS4-14", "HS4-19", "HS4-28", "HS4-29", "HS4-40", "HS4-42"],
    children: ["HS2-3", "HS2-5", "HS2-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-10",
    name: "",
    intervals: [1, 4, 7],
    parents: ["HS4-8", "HS4-9", "HS4-10", "HS4-17", "HS4-20", "HS4-30", "HS4-32", "HS4-35", "HS4-38"],
    children: ["HS2-4", "HS2-5", "HS2-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-11",
    name: "",
    intervals: [5, 1, 6],
    parents: ["HS4-11", "HS4-12", "HS4-14", "HS4-17", "HS4-21", "HS4-31", "HS4-32", "HS4-33", "HS4-34"],
    children: ["HS2-1", "HS2-6", "HS2-5"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-12",
    name: "",
    intervals: [4, 2, 6],
    parents: ["HS4-11", "HS4-13", "HS4-15", "HS4-18", "HS4-22", "HS4-32", "HS4-36", "HS4-41", "HS4-42"],
    children: ["HS2-2", "HS2-6", "HS2-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-13",
    name: "Diminished Triad",
    intervals: [3, 3, 6],
    parents: ["HS4-12", "HS4-13", "HS4-16", "HS4-19", "HS4-24", "HS4-33", "HS4-39", "HS4-42", "HS4-43"],
    children: ["HS2-3", "HS2-6"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-14",
    name: "",
    intervals: [2, 4, 6],
    parents: ["HS4-14", "HS4-15", "HS4-16", "HS4-20", "HS4-27", "HS4-34", "HS4-36", "HS4-39", "HS4-41"],
    children: ["HS2-4", "HS2-6", "HS2-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-15",
    name: "",
    intervals: [1, 5, 6],
    parents: ["HS4-17", "HS4-18", "HS4-19", "HS4-20", "HS4-21", "HS4-22", "HS4-24", "HS4-27", "HS4-31"],
    children: ["HS2-5", "HS2-6", "HS2-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-16",
    name: "Sus 2 / Sus 4 / Quartal",
    intervals: [2, 5, 5],
    parents: ["HS4-21", "HS4-23", "HS4-25", "HS4-27", "HS4-28", "HS4-29", "HS4-30", "HS4-32"],
    children: ["HS2-5", "HS2-2"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-17",
    name: "Major Triad",
    intervals: [4, 3, 5],
    parents: ["HS4-22", "HS4-23", "HS4-26", "HS4-29", "HS4-33", "HS4-35", "HS4-38", "HS4-39", "HS4-40"],
    children: ["HS2-3", "HS2-5", "HS2-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-18",
    name: "Minor Triad",
    intervals: [3, 4, 5],
    parents: ["HS4-24", "HS4-25", "HS4-26", "HS4-30", "HS4-34", "HS4-37", "HS4-38", "HS4-40", "HS4-42"],
    children: ["HS2-4", "HS2-5", "HS2-3"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS3-19",
    name: "Augmented Triad",
    intervals: [4, 4, 4],
    parents: ["HS4-35", "HS4-36", "HS4-37"],
    children: ["HS2-4"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-1",
    name: "Minor 2ⁿᵈ / Major 7ᵗʰ",
    intervals: [1, 11],
    parents: ["HS3-1", "HS3-2", "HS3-3", "HS3-4", "HS3-6", "HS3-7", "HS3-10", "HS3-11", "HS3-15"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-2",
    name: "Major 2ⁿᵈ / Minor 7ᵗʰ",
    intervals: [2, 10],
    parents: ["HS3-1", "HS3-2", "HS3-3", "HS3-5", "HS3-8", "HS3-9", "HS3-12", "HS3-14", "HS3-16"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-3",
    name: "Minor 3ʳᵈ / Major 6ᵗʰ",
    intervals: [3, 9],
    parents: ["HS3-2", "HS3-3", "HS3-4", "HS3-6", "HS3-8", "HS3-9", "HS3-13", "HS3-17", "HS3-18"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-4",
    name: "Major 3ʳᵈ / Minor 6ᵗʰ",
    intervals: [4, 8],
    parents: ["HS3-4", "HS3-5", "HS3-6", "HS3-7", "HS3-10", "HS3-12", "HS3-14", "HS3-17", "HS3-18", "HS3-19"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-5",
    name: "Perfect 4ᵗʰ / Perfect 5ᵗʰ",
    intervals: [5, 7],
    parents: ["HS3-7", "HS3-8", "HS3-9", "HS3-10", "HS3-11", "HS3-15", "HS3-16", "HS3-17", "HS3-18"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS2-6",
    name: "Tritone",
    intervals: [6, 6],
    parents: ["HS3-11", "HS3-12", "HS3-13", "HS3-14", "HS3-15"],
    children: ["HS1-1"],
    root: 0,
    contiguousSemitones: false
}, {
    id: "HS1-1",
    name: "One Voice / Unison / Octave",
    intervals: [12],
    parents: ["HS2-1", "HS2-2", "HS2-3", "HS2-4", "HS2-5", "HS2-6"],
    children: [],
    root: 0,
    contiguousSemitones: false
}];