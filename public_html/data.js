'use strict';

/* eslint-disable camelcase */

// Array of rows (nested arrays) of IntervalCycle objects used to create nodes of the PToH.
// This version contains a flag for cohemitonic nodes.
export const dataset = [
  [ // 12
    {
      id: 'IC12-1',
      name: 'Chromatic Scale',
      intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      parents: [],
      children: ['IC11-1'],
      root: 0,
      cohemitonic: true
    }
  ], [ // 11
    {
      id: 'IC11-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      parents: ['IC12-1'],
      children: ['IC10-1', 'IC10-2', 'IC10-3', 'IC10-4', 'IC10-5', 'IC10-6'],
      root: 0,
      cohemitonic: true
    }
  ], [ // 10
    {
      id: 'IC10-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      parents: ['IC11-1'],
      children: ['IC9-1', 'IC9-2', 'IC9-3', 'IC9-4', 'IC9-5', 'IC9-6', 'IC9-7', 'IC9-8', 'IC9-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC10-2',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      parents: ['IC11-1'],
      children: ['IC9-1', 'IC9-9', 'IC9-10', 'IC9-11', 'IC9-12', 'IC9-13', 'IC9-14', 'IC9-15', 'IC9-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC10-3',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
      parents: ['IC11-1'],
      children: ['IC9-2', 'IC9-9', 'IC9-8', 'IC9-15', 'IC9-16', 'IC9-17', 'IC9-18', 'IC9-11', 'IC9-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC10-4',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
      parents: ['IC11-1'],
      children: ['IC9-3', 'IC9-10', 'IC9-8', 'IC9-7', 'IC9-14', 'IC9-18', 'IC9-19', 'IC9-17', 'IC9-12', 'IC9-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC10-5',
      name: '',
      intervals: [1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      parents: ['IC11-1'],
      children: ['IC9-4', 'IC9-11', 'IC9-15', 'IC9-7', 'IC9-6', 'IC9-13', 'IC9-17', 'IC9-18', 'IC9-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC10-6',
      name: '',
      intervals: [1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
      parents: ['IC11-1'],
      children: ['IC9-5', 'IC9-12', 'IC9-16', 'IC9-14', 'IC9-6'],
      root: 0,
      cohemitonic: true
    }
  ], [ // 9
    {
      id: 'IC9-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 1, 1, 4],
      parents: ['IC10-1', 'IC10-2'],
      children: ['IC8-1', 'IC8-2', 'IC8-3', 'IC8-4', 'IC8-5', 'IC8-6', 'IC8-7', 'IC8-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-2',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 1, 1, 3],
      parents: ['IC10-1', 'IC10-2', 'IC10-3'],
      children: ['IC8-1', 'IC8-9', 'IC8-10', 'IC8-11', 'IC8-12', 'IC8-13', 'IC8-14', 'IC8-15', 'IC8-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-3',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 1, 1, 3],
      parents: ['IC10-1', 'IC10-3', 'IC10-4'],
      children: ['IC8-2', 'IC8-9', 'IC8-16', 'IC8-17', 'IC8-18', 'IC8-19', 'IC8-20', 'IC8-21', 'IC8-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-4',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 1, 1, 3],
      parents: ['IC10-1', 'IC10-4', 'IC10-5'],
      children: ['IC8-3', 'IC8-10', 'IC8-16', 'IC8-22', 'IC8-23', 'IC8-24', 'IC8-25', 'IC8-26', 'IC8-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-5',
      name: '',
      intervals: [1, 1, 1, 2, 1, 1, 1, 1, 3],
      parents: ['IC10-1', 'IC10-5', 'IC10-6'],
      children: ['IC8-4', 'IC8-11', 'IC8-17', 'IC8-22', 'IC8-27', 'IC8-28', 'IC8-29', 'IC8-30', 'IC8-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-6',
      name: '',
      intervals: [1, 1, 1, 1, 2, 1, 1, 1, 3],
      parents: ['IC10-1', 'IC10-5', 'IC10-6'],
      children: ['IC8-5', 'IC8-12', 'IC8-18', 'IC8-23', 'IC8-27', 'IC8-22', 'IC8-31', 'IC8-32', 'IC8-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-7',
      name: '',
      intervals: [1, 1, 1, 1, 1, 2, 1, 1, 3],
      parents: ['IC10-1', 'IC10-4', 'IC10-5'],
      children: ['IC8-6', 'IC8-13', 'IC8-19', 'IC8-24', 'IC8-28', 'IC8-22', 'IC8-16', 'IC8-33', 'IC8-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-8',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 2, 1, 3],
      parents: ['IC10-1', 'IC10-3', 'IC10-4'],
      children: ['IC8-7', 'IC8-14', 'IC8-20', 'IC8-25', 'IC8-29', 'IC8-31', 'IC8-16', 'IC8-9', 'IC8-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-9',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 1, 2, 3],
      parents: ['IC10-1', 'IC10-2', 'IC10-3'],
      children: ['IC8-8', 'IC8-15', 'IC8-21', 'IC8-26', 'IC8-30', 'IC8-32', 'IC8-33', 'IC8-9', 'IC8-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-10',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 1, 2, 2],
      parents: ['IC10-2', 'IC10-4'],
      children: ['IC8-8', 'IC8-33', 'IC8-34', 'IC8-35', 'IC8-36', 'IC8-37', 'IC8-10', 'IC8-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-11',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 1, 2, 2],
      parents: ['IC10-2', 'IC10-3', 'IC10-5'],
      children: ['IC8-15', 'IC8-33', 'IC8-31', 'IC8-38', 'IC8-39', 'IC8-40', 'IC8-35', 'IC8-11', 'IC8-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-12',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 1, 2, 2],
      parents: ['IC10-2', 'IC10-4', 'IC10-6'],
      children: ['IC8-21', 'IC8-34', 'IC8-31', 'IC8-28', 'IC8-41', 'IC8-42', 'IC8-36', 'IC8-12', 'IC8-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-13',
      name: '',
      intervals: [2, 1, 1, 1, 2, 1, 1, 1, 2],
      parents: ['IC10-2', 'IC10-5'],
      children: ['IC8-5', 'IC8-26', 'IC8-35', 'IC8-38', 'IC8-28', 'IC8-23', 'IC8-37', 'IC8-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-14',
      name: '',
      intervals: [2, 1, 1, 1, 1, 2, 1, 1, 2],
      parents: ['IC10-2', 'IC10-4', 'IC10-6'],
      children: ['IC8-6', 'IC8-30', 'IC8-36', 'IC8-39', 'IC8-41', 'IC8-23', 'IC8-17', 'IC8-34', 'IC8-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-15',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 2, 1, 2],
      parents: ['IC10-2', 'IC10-3', 'IC10-5'],
      children: ['IC8-7', 'IC8-32', 'IC8-37', 'IC8-40', 'IC8-42', 'IC8-38', 'IC8-17', 'IC8-10', 'IC8-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-16',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 2, 1, 2],
      parents: ['IC10-3', 'IC10-6'],
      children: ['IC8-14', 'IC8-32', 'IC8-29', 'IC8-42', 'IC8-43', 'IC8-39', 'IC8-18', 'IC8-11', 'IC8-21'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-17',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 2, 1, 2],
      parents: ['IC10-3', 'IC10-4', 'IC10-5'],
      children: ['IC8-20', 'IC8-37', 'IC8-29', 'IC8-24', 'IC8-39', 'IC8-40', 'IC8-19', 'IC8-12', 'IC8-26'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-18',
      name: '',
      intervals: [1, 2, 1, 1, 1, 2, 1, 1, 2],
      parents: ['IC10-3', 'IC10-4', 'IC10-5'],
      children: ['IC8-13', 'IC8-30', 'IC8-25', 'IC8-40', 'IC8-42', 'IC8-24', 'IC8-18', 'IC8-35', 'IC8-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC9-19',
      name: '',
      intervals: [1, 1, 2, 1, 1, 2, 1, 1, 2],
      parents: ['IC10-4'],
      children: ['IC8-19', 'IC8-36', 'IC8-25'],
      root: 0,
      cohemitonic: true
    }
  ], [ // 8
    {
      id: 'IC8-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 1, 5],
      parents: ['IC9-1', 'IC9-2', 'IC9-9'],
      children: ['IC7-1', 'IC7-2', 'IC7-3', 'IC7-4', 'IC7-5', 'IC7-6', 'IC7-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-2',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 1, 4],
      parents: ['IC9-1', 'IC9-2', 'IC9-3', 'IC9-10'],
      children: ['IC7-1', 'IC7-8', 'IC7-9', 'IC7-10', 'IC7-11', 'IC7-12', 'IC7-13', 'IC7-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-3',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 1, 4],
      parents: ['IC9-1', 'IC9-3', 'IC9-4', 'IC9-11'],
      children: ['IC7-2', 'IC7-8', 'IC7-14', 'IC7-15', 'IC7-16', 'IC7-17', 'IC7-18', 'IC7-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-4',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 1, 4],
      parents: ['IC9-1', 'IC9-4', 'IC9-5', 'IC9-12'],
      children: ['IC7-3', 'IC7-9', 'IC7-14', 'IC7-19', 'IC7-20', 'IC7-21', 'IC7-22', 'IC7-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-5',
      name: '',
      intervals: [1, 1, 1, 2, 1, 1, 1, 4],
      parents: ['IC9-1', 'IC9-5', 'IC9-6', 'IC9-13'],
      children: ['IC7-4', 'IC7-10', 'IC7-15', 'IC7-19', 'IC7-23', 'IC7-24', 'IC7-25', 'IC7-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-6',
      name: '',
      intervals: [1, 1, 1, 1, 2, 1, 1, 4],
      parents: ['IC9-1', 'IC9-6', 'IC9-7', 'IC9-14'],
      children: ['IC7-5', 'IC7-11', 'IC7-16', 'IC7-20', 'IC7-23', 'IC7-26', 'IC7-27', 'IC7-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-7',
      name: '',
      intervals: [1, 1, 1, 1, 1, 2, 1, 4],
      parents: ['IC9-1', 'IC9-7', 'IC9-8', 'IC9-15'],
      children: ['IC7-6', 'IC7-12', 'IC7-17', 'IC7-21', 'IC7-24', 'IC7-26', 'IC7-28', 'IC7-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-8',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 2, 4],
      parents: ['IC9-1', 'IC9-8', 'IC9-9', 'IC9-10'],
      children: ['IC7-7', 'IC7-13', 'IC7-18', 'IC7-22', 'IC7-25', 'IC7-27', 'IC7-28', 'IC7-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-9',
      name: '',
      intervals: [3, 1, 1, 1, 1, 1, 1, 3],
      parents: ['IC9-2', 'IC9-3', 'IC9-8', 'IC9-9'],
      children: ['IC7-1', 'IC7-28', 'IC7-29', 'IC7-30', 'IC7-31', 'IC7-32', 'IC7-33', 'IC7-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-10',
      name: '',
      intervals: [2, 2, 1, 1, 1, 1, 1, 3],
      parents: ['IC9-2', 'IC9-4', 'IC9-10', 'IC9-15'],
      children: ['IC7-2', 'IC7-28', 'IC7-34', 'IC7-35', 'IC7-36', 'IC7-37', 'IC7-38', 'IC7-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-11',
      name: '',
      intervals: [2, 1, 2, 1, 1, 1, 1, 3],
      parents: ['IC9-2', 'IC9-5', 'IC9-11', 'IC9-16'],
      children: ['IC7-3', 'IC7-29', 'IC7-34', 'IC7-39', 'IC7-40', 'IC7-41', 'IC7-42', 'IC7-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-12',
      name: '',
      intervals: [2, 1, 1, 2, 1, 1, 1, 3],
      parents: ['IC9-2', 'IC9-6', 'IC9-12', 'IC9-17'],
      children: ['IC7-4', 'IC7-30', 'IC7-35', 'IC7-39', 'IC7-43', 'IC7-44', 'IC7-45', 'IC7-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-13',
      name: '',
      intervals: [2, 1, 1, 1, 2, 1, 1, 3],
      parents: ['IC9-2', 'IC9-7', 'IC9-13', 'IC9-18'],
      children: ['IC7-5', 'IC7-31', 'IC7-36', 'IC7-40', 'IC7-43', 'IC7-46', 'IC7-47', 'IC7-12'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-14',
      name: '',
      intervals: [2, 1, 1, 1, 1, 2, 1, 3],
      parents: ['IC9-2', 'IC9-8', 'IC9-14', 'IC9-16'],
      children: ['IC7-6', 'IC7-32', 'IC7-37', 'IC7-41', 'IC7-44', 'IC7-46', 'IC7-29', 'IC7-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-15',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 2, 3],
      parents: ['IC9-2', 'IC9-9', 'IC9-11', 'IC9-15'],
      children: ['IC7-7', 'IC7-33', 'IC7-38', 'IC7-42', 'IC7-45', 'IC7-47', 'IC7-29', 'IC7-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-16',
      name: '',
      intervals: [1, 3, 1, 1, 1, 1, 1, 3],
      parents: ['IC9-3', 'IC9-4', 'IC9-7', 'IC9-8'],
      children: ['IC7-8', 'IC7-28', 'IC7-26', 'IC7-46', 'IC7-48', 'IC7-49', 'IC7-50', 'IC7-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-17',
      name: '',
      intervals: [1, 2, 2, 1, 1, 1, 1, 3],
      parents: ['IC9-3', 'IC9-5', 'IC9-14', 'IC9-15'],
      children: ['IC7-9', 'IC7-29', 'IC7-26', 'IC7-51', 'IC7-52', 'IC7-53', 'IC7-54', 'IC7-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-18',
      name: '',
      intervals: [1, 2, 1, 2, 1, 1, 1, 3],
      parents: ['IC9-3', 'IC9-6', 'IC9-16', 'IC9-18'],
      children: ['IC7-10', 'IC7-30', 'IC7-46', 'IC7-51', 'IC7-55', 'IC7-56', 'IC7-57', 'IC7-16'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-19',
      name: '',
      intervals: [1, 2, 1, 1, 2, 1, 1, 3],
      parents: ['IC9-3', 'IC9-7', 'IC9-17', 'IC9-19'],
      children: ['IC7-11', 'IC7-31', 'IC7-48', 'IC7-52', 'IC7-55', 'IC7-58', 'IC7-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-20',
      name: '',
      intervals: [1, 2, 1, 1, 1, 2, 1, 3],
      parents: ['IC9-3', 'IC9-8', 'IC9-17', 'IC9-18'],
      children: ['IC7-12', 'IC7-32', 'IC7-49', 'IC7-53', 'IC7-56', 'IC7-48', 'IC7-30', 'IC7-18'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-21',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 2, 3],
      parents: ['IC9-3', 'IC9-9', 'IC9-12', 'IC9-16'],
      children: ['IC7-13', 'IC7-33', 'IC7-50', 'IC7-54', 'IC7-57', 'IC7-58', 'IC7-30', 'IC7-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-22',
      name: '',
      intervals: [1, 1, 3, 1, 1, 1, 1, 3],
      parents: ['IC9-4', 'IC9-5', 'IC9-6', 'IC9-7'],
      children: ['IC7-14', 'IC7-34', 'IC7-26', 'IC7-23', 'IC7-43', 'IC7-55', 'IC7-59', 'IC7-19'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-23',
      name: '',
      intervals: [1, 1, 2, 2, 1, 1, 1, 3],
      parents: ['IC9-4', 'IC9-6', 'IC9-13', 'IC9-14'],
      children: ['IC7-15', 'IC7-35', 'IC7-46', 'IC7-23', 'IC7-59', 'IC7-60', 'IC7-61', 'IC7-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-24',
      name: '',
      intervals: [1, 1, 2, 1, 2, 1, 1, 3],
      parents: ['IC9-4', 'IC9-7', 'IC9-17', 'IC9-18'],
      children: ['IC7-16', 'IC7-36', 'IC7-48', 'IC7-43', 'IC7-59', 'IC7-49', 'IC7-62', 'IC7-21'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-25',
      name: '',
      intervals: [1, 1, 2, 1, 1, 2, 1, 3],
      parents: ['IC9-4', 'IC9-8', 'IC9-18', 'IC9-19'],
      children: ['IC7-17', 'IC7-37', 'IC7-49', 'IC7-55', 'IC7-60', 'IC7-31', 'IC7-22'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-26',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 2, 3],
      parents: ['IC9-4', 'IC9-9', 'IC9-13', 'IC9-17'],
      children: ['IC7-18', 'IC7-38', 'IC7-50', 'IC7-59', 'IC7-61', 'IC7-62', 'IC7-31', 'IC7-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-27',
      name: '',
      intervals: [1, 1, 1, 3, 1, 1, 1, 3],
      parents: ['IC9-5', 'IC9-6'],
      children: ['IC7-19', 'IC7-39', 'IC7-51', 'IC7-23'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-28',
      name: '',
      intervals: [1, 1, 1, 2, 2, 1, 1, 3],
      parents: ['IC9-5', 'IC9-7', 'IC9-12', 'IC9-13'],
      children: ['IC7-20', 'IC7-40', 'IC7-52', 'IC7-43', 'IC7-19', 'IC7-50', 'IC7-63', 'IC7-24'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-29',
      name: '',
      intervals: [1, 1, 1, 2, 1, 2, 1, 3],
      parents: ['IC9-5', 'IC9-8', 'IC9-16', 'IC9-17'],
      children: ['IC7-21', 'IC7-41', 'IC7-53', 'IC7-55', 'IC7-39', 'IC7-50', 'IC7-32', 'IC7-25'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-30',
      name: '',
      intervals: [1, 1, 1, 2, 1, 1, 2, 3],
      parents: ['IC9-5', 'IC9-9', 'IC9-14', 'IC9-18'],
      children: ['IC7-22', 'IC7-42', 'IC7-54', 'IC7-59', 'IC7-51', 'IC7-63', 'IC7-32', 'IC7-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-31',
      name: '',
      intervals: [1, 1, 1, 1, 2, 2, 1, 3],
      parents: ['IC9-6', 'IC9-8', 'IC9-11', 'IC9-12'],
      children: ['IC7-24', 'IC7-44', 'IC7-56', 'IC7-60', 'IC7-39', 'IC7-14', 'IC7-33', 'IC7-27'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-32',
      name: '',
      intervals: [1, 1, 1, 1, 2, 1, 2, 3],
      parents: ['IC9-6', 'IC9-9', 'IC9-15', 'IC9-16'],
      children: ['IC7-25', 'IC7-45', 'IC7-57', 'IC7-61', 'IC7-51', 'IC7-34', 'IC7-33', 'IC7-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-33',
      name: '',
      intervals: [1, 1, 1, 1, 1, 2, 2, 3],
      parents: ['IC9-7', 'IC9-9', 'IC9-10', 'IC9-11'],
      children: ['IC7-27', 'IC7-47', 'IC7-58', 'IC7-62', 'IC7-63', 'IC7-34', 'IC7-8', 'IC7-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-34',
      name: '',
      intervals: [2, 2, 1, 1, 1, 1, 2, 2],
      parents: ['IC9-10', 'IC9-12', 'IC9-14'],
      children: ['IC7-13', 'IC7-27', 'IC7-63', 'IC7-64', 'IC7-65', 'IC7-35', 'IC7-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-35',
      name: '',
      intervals: [2, 1, 2, 1, 1, 1, 2, 2],
      parents: ['IC9-10', 'IC9-11', 'IC9-13', 'IC9-18'],
      children: ['IC7-18', 'IC7-47', 'IC7-63', 'IC7-60', 'IC7-66', 'IC7-65', 'IC7-36', 'IC7-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-36',
      name: '',
      intervals: [2, 1, 1, 2, 1, 1, 2, 2],
      parents: ['IC9-10', 'IC9-12', 'IC9-14', 'IC9-19'],
      children: ['IC7-22', 'IC7-58', 'IC7-64', 'IC7-60', 'IC7-52', 'IC7-37', 'IC7-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-37',
      name: '',
      intervals: [2, 1, 1, 1, 2, 1, 2, 2],
      parents: ['IC9-10', 'IC9-13', 'IC9-15', 'IC9-17'],
      children: ['IC7-25', 'IC7-62', 'IC7-65', 'IC7-66', 'IC7-52', 'IC7-35', 'IC7-38', 'IC7-12'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-38',
      name: 'Dominant & Dorian Bebop Modes',
      intervals: [2, 1, 2, 2, 1, 1, 1, 2],
      parents: ['IC9-11', 'IC9-13', 'IC9-15'],
      children: ['IC7-15', 'IC7-38', 'IC7-47', 'IC7-24', 'IC7-61', 'IC7-66', 'IC7-40'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-39',
      name: '',
      intervals: [1, 2, 1, 2, 1, 1, 2, 2],
      parents: ['IC9-11', 'IC9-14', 'IC9-16', 'IC9-17'],
      children: ['IC7-42', 'IC7-58', 'IC7-44', 'IC7-61', 'IC7-53', 'IC7-65', 'IC7-41', 'IC7-16'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-40',
      name: 'Major & Harmonic/Natural Minor Bebop Modes',
      intervals: [1, 2, 1, 1, 2, 1, 2, 2],
      parents: ['IC9-11', 'IC9-15', 'IC9-17', 'IC9-18'],
      children: ['IC7-45', 'IC7-62', 'IC7-56', 'IC7-66', 'IC7-53', 'IC7-36', 'IC7-42', 'IC7-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-41',
      name: '',
      intervals: [2, 1, 1, 2, 2, 1, 1, 2],
      parents: ['IC9-12', 'IC9-14'],
      children: ['IC7-20', 'IC7-54', 'IC7-64', 'IC7-44'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-42',
      name: 'Melodic Minor Bebop Modes',
      intervals: [2, 1, 1, 2, 1, 2, 1, 2],
      parents: ['IC9-12', 'IC9-15', 'IC9-16', 'IC9-18'],
      children: ['IC7-21', 'IC7-57', 'IC7-65', 'IC7-56', 'IC7-40', 'IC7-54', 'IC7-37', 'IC7-45'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC8-43',
      name: 'Diminished/Octatonic Modes',
      intervals: [1, 2, 1, 2, 1, 2, 1, 2],
      parents: ['IC9-16'],
      children: ['IC7-41', 'IC7-57'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }
  ], [ // 7
    {
      id: 'IC7-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 1, 6],
      parents: ['IC8-1', 'IC8-2', 'IC8-8', 'IC8-9'],
      children: ['IC6-1', 'IC6-2', 'IC6-3', 'IC6-4', 'IC6-5', 'IC6-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-2',
      name: '',
      intervals: [2, 1, 1, 1, 1, 1, 5],
      parents: ['IC8-1', 'IC8-2', 'IC8-3', 'IC8-10', 'IC8-15'],
      children: ['IC6-1', 'IC6-7', 'IC6-8', 'IC6-9', 'IC6-10', 'IC6-11', 'IC6-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-3',
      name: '',
      intervals: [1, 2, 1, 1, 1, 1, 5],
      parents: ['IC8-1', 'IC8-3', 'IC8-4', 'IC8-11', 'IC8-21'],
      children: ['IC6-2', 'IC6-7', 'IC6-12', 'IC6-13', 'IC6-14', 'IC6-15', 'IC6-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-4',
      name: '',
      intervals: [1, 1, 2, 1, 1, 1, 5],
      parents: ['IC8-1', 'IC8-4', 'IC8-5', 'IC8-12', 'IC8-26'],
      children: ['IC6-3', 'IC6-8', 'IC6-12', 'IC6-16', 'IC6-17', 'IC6-18', 'IC6-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-5',
      name: '',
      intervals: [1, 1, 1, 2, 1, 1, 5],
      parents: ['IC8-1', 'IC8-5', 'IC8-6', 'IC8-13', 'IC8-30'],
      children: ['IC6-4', 'IC6-9', 'IC6-13', 'IC6-16', 'IC6-19', 'IC6-20', 'IC6-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-6',
      name: '',
      intervals: [1, 1, 1, 1, 2, 1, 5],
      parents: ['IC8-1', 'IC8-6', 'IC8-7', 'IC8-14', 'IC8-32'],
      children: ['IC6-5', 'IC6-10', 'IC6-14', 'IC6-17', 'IC6-19', 'IC6-21', 'IC6-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-7',
      name: '',
      intervals: [1, 1, 1, 1, 1, 2, 5],
      parents: ['IC8-1', 'IC8-7', 'IC8-8', 'IC8-15', 'IC8-33'],
      children: ['IC6-6', 'IC6-11', 'IC6-15', 'IC6-18', 'IC6-20', 'IC6-21', 'IC6-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-8',
      name: '',
      intervals: [3, 1, 1, 1, 1, 1, 4],
      parents: ['IC8-2', 'IC8-3', 'IC8-9', 'IC8-16', 'IC8-33'],
      children: ['IC6-1', 'IC6-22', 'IC6-23', 'IC6-24', 'IC6-25', 'IC6-26', 'IC6-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-9',
      name: '',
      intervals: [2, 2, 1, 1, 1, 1, 4],
      parents: ['IC8-2', 'IC8-4', 'IC8-10', 'IC8-17', 'IC8-34'],
      children: ['IC6-2', 'IC6-22', 'IC6-27', 'IC6-28', 'IC6-29', 'IC6-30', 'IC6-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-10',
      name: '',
      intervals: [2, 1, 2, 1, 1, 1, 4],
      parents: ['IC8-2', 'IC8-5', 'IC8-11', 'IC8-18', 'IC8-35'],
      children: ['IC6-3', 'IC6-23', 'IC6-27', 'IC6-31', 'IC6-32', 'IC6-33', 'IC6-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-11',
      name: '',
      intervals: [2, 1, 1, 2, 1, 1, 4],
      parents: ['IC8-2', 'IC8-6', 'IC8-12', 'IC8-19', 'IC8-36'],
      children: ['IC6-4', 'IC6-24', 'IC6-28', 'IC6-31', 'IC6-34', 'IC6-35', 'IC6-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-12',
      name: '',
      intervals: [2, 1, 1, 1, 2, 1, 4],
      parents: ['IC8-2', 'IC8-7', 'IC8-13', 'IC8-20', 'IC8-37'],
      children: ['IC6-5', 'IC6-25', 'IC6-29', 'IC6-32', 'IC6-34', 'IC6-36', 'IC6-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-13',
      name: '',
      intervals: [2, 1, 1, 1, 1, 2, 4],
      parents: ['IC8-2', 'IC8-8', 'IC8-14', 'IC8-21', 'IC8-34'],
      children: ['IC6-6', 'IC6-26', 'IC6-30', 'IC6-33', 'IC6-35', 'IC6-36', 'IC6-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-14',
      name: '',
      intervals: [1, 3, 1, 1, 1, 1, 4],
      parents: ['IC8-3', 'IC8-4', 'IC8-16', 'IC8-22', 'IC8-31'],
      children: ['IC6-7', 'IC6-22', 'IC6-37', 'IC6-38', 'IC6-39', 'IC6-40', 'IC6-12'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-15',
      name: '',
      intervals: [1, 2, 2, 1, 1, 1, 4],
      parents: ['IC8-3', 'IC8-5', 'IC8-17', 'IC8-23', 'IC8-38'],
      children: ['IC6-8', 'IC6-23', 'IC6-37', 'IC6-41', 'IC6-42', 'IC6-43', 'IC6-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-16',
      name: '',
      intervals: [1, 2, 1, 2, 1, 1, 4],
      parents: ['IC8-3', 'IC8-6', 'IC8-18', 'IC8-24', 'IC8-39'],
      children: ['IC6-9', 'IC6-24', 'IC6-38', 'IC6-41', 'IC6-44', 'IC6-45', 'IC6-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-17',
      name: '',
      intervals: [1, 2, 1, 1, 2, 1, 4],
      parents: ['IC8-3', 'IC8-7', 'IC8-19', 'IC8-25', 'IC8-40'],
      children: ['IC6-10', 'IC6-25', 'IC6-39', 'IC6-42', 'IC6-44', 'IC6-46', 'IC6-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-18',
      name: '',
      intervals: [1, 2, 1, 1, 1, 2, 4],
      parents: ['IC8-3', 'IC8-8', 'IC8-20', 'IC8-26', 'IC8-35'],
      children: ['IC6-11', 'IC6-26', 'IC6-40', 'IC6-43', 'IC6-45', 'IC6-46', 'IC6-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-19',
      name: '',
      intervals: [1, 1, 3, 1, 1, 1, 4],
      parents: ['IC8-4', 'IC8-5', 'IC8-22', 'IC8-27', 'IC8-28'],
      children: ['IC6-12', 'IC6-27', 'IC6-37', 'IC6-47', 'IC6-48', 'IC6-49', 'IC6-16'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-20',
      name: '',
      intervals: [1, 1, 2, 2, 1, 1, 4],
      parents: ['IC8-4', 'IC8-6', 'IC8-23', 'IC8-28', 'IC8-41'],
      children: ['IC6-13', 'IC6-28', 'IC6-38', 'IC6-47', 'IC6-50', 'IC6-51', 'IC6-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-21',
      name: '',
      intervals: [1, 1, 2, 1, 2, 1, 4],
      parents: ['IC8-4', 'IC8-7', 'IC8-24', 'IC8-29', 'IC8-42'],
      children: ['IC6-14', 'IC6-29', 'IC6-39', 'IC6-48', 'IC6-50', 'IC6-52', 'IC6-18'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-22',
      name: '',
      intervals: [1, 1, 2, 1, 1, 2, 4],
      parents: ['IC8-4', 'IC8-8', 'IC8-25', 'IC8-30', 'IC8-36'],
      children: ['IC6-15', 'IC6-30', 'IC6-40', 'IC6-49', 'IC6-51', 'IC6-52', 'IC6-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-23',
      name: '',
      intervals: [1, 1, 1, 3, 1, 1, 4],
      parents: ['IC8-5', 'IC8-6', 'IC8-22', 'IC8-23', 'IC8-27'],
      children: ['IC6-16', 'IC6-31', 'IC6-41', 'IC6-47', 'IC6-37', 'IC6-53', 'IC6-19'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-24',
      name: '',
      intervals: [1, 1, 1, 2, 2, 1, 4],
      parents: ['IC8-5', 'IC8-7', 'IC8-28', 'IC8-31', 'IC8-38'],
      children: ['IC6-17', 'IC6-32', 'IC6-42', 'IC6-48', 'IC6-37', 'IC6-54', 'IC6-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-25',
      name: '',
      intervals: [1, 1, 1, 2, 1, 2, 4],
      parents: ['IC8-5', 'IC8-8', 'IC8-29', 'IC8-32', 'IC8-37'],
      children: ['IC6-18', 'IC6-33', 'IC6-43', 'IC6-49', 'IC6-53', 'IC6-54', 'IC6-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-26',
      name: '',
      intervals: [1, 1, 1, 1, 3, 1, 4],
      parents: ['IC8-6', 'IC8-7', 'IC8-16', 'IC8-17', 'IC8-22'],
      children: ['IC6-19', 'IC6-34', 'IC6-44', 'IC6-50', 'IC6-37', 'IC6-22', 'IC6-21'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-27',
      name: '',
      intervals: [1, 1, 1, 1, 2, 2, 4],
      parents: ['IC8-6', 'IC8-8', 'IC8-31', 'IC8-33', 'IC8-34'],
      children: ['IC6-20', 'IC6-35', 'IC6-45', 'IC6-51', 'IC6-53', 'IC6-22', 'IC6-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-28',
      name: '',
      intervals: [1, 1, 1, 1, 1, 3, 4],
      parents: ['IC8-7', 'IC8-8', 'IC8-9', 'IC8-10', 'IC8-16'],
      children: ['IC6-21', 'IC6-36', 'IC6-46', 'IC6-52', 'IC6-54', 'IC6-22', 'IC6-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-29',
      name: '',
      intervals: [2, 1, 1, 1, 1, 3, 3],
      parents: ['IC8-9', 'IC8-11', 'IC8-14', 'IC8-15', 'IC8-17'],
      children: ['IC6-21', 'IC6-55', 'IC6-56', 'IC6-57', 'IC6-58', 'IC6-23', 'IC6-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-30',
      name: '',
      intervals: [3, 1, 2, 1, 1, 1, 3],
      parents: ['IC8-9', 'IC8-12', 'IC8-18', 'IC8-20', 'IC8-21'],
      children: ['IC6-3', 'IC6-36', 'IC6-55', 'IC6-59', 'IC6-60', 'IC6-61', 'IC6-24'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-31',
      name: '',
      intervals: [3, 1, 1, 2, 1, 1, 3],
      parents: ['IC8-9', 'IC8-13', 'IC8-19', 'IC8-25', 'IC8-26'],
      children: ['IC6-4', 'IC6-46', 'IC6-56', 'IC6-59', 'IC6-62', 'IC6-63', 'IC6-25'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-32',
      name: '',
      intervals: [3, 1, 1, 1, 2, 1, 3],
      parents: ['IC8-9', 'IC8-14', 'IC8-20', 'IC8-29', 'IC8-30'],
      children: ['IC6-5', 'IC6-52', 'IC6-57', 'IC6-60', 'IC6-62', 'IC6-55', 'IC6-26'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-33',
      name: '',
      intervals: [3, 1, 1, 1, 1, 2, 3],
      parents: ['IC8-9', 'IC8-15', 'IC8-21', 'IC8-31', 'IC8-32'],
      children: ['IC6-6', 'IC6-54', 'IC6-58', 'IC6-61', 'IC6-63', 'IC6-55', 'IC6-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-34',
      name: '',
      intervals: [2, 3, 1, 1, 1, 1, 3],
      parents: ['IC8-10', 'IC8-11', 'IC8-22', 'IC8-32', 'IC8-33'],
      children: ['IC6-7', 'IC6-21', 'IC6-53', 'IC6-64', 'IC6-65', 'IC6-66', 'IC6-27'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-35',
      name: '',
      intervals: [2, 2, 2, 1, 1, 1, 3],
      parents: ['IC8-10', 'IC8-12', 'IC8-23', 'IC8-34', 'IC8-37'],
      children: ['IC6-8', 'IC6-36', 'IC6-53', 'IC6-67', 'IC6-68', 'IC6-69', 'IC6-28'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-36',
      name: '',
      intervals: [2, 2, 1, 2, 1, 1, 3],
      parents: ['IC8-10', 'IC8-13', 'IC8-24', 'IC8-35', 'IC8-40'],
      children: ['IC6-9', 'IC6-46', 'IC6-64', 'IC6-67', 'IC6-70', 'IC6-71', 'IC6-29'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-37',
      name: '',
      intervals: [2, 2, 1, 1, 2, 1, 3],
      parents: ['IC8-10', 'IC8-14', 'IC8-25', 'IC8-36', 'IC8-42'],
      children: ['IC6-10', 'IC6-52', 'IC6-65', 'IC6-68', 'IC6-70', 'IC6-56', 'IC6-30'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-38',
      name: '',
      intervals: [2, 2, 1, 1, 1, 2, 3],
      parents: ['IC8-10', 'IC8-15', 'IC8-26', 'IC8-37', 'IC8-38'],
      children: ['IC6-11', 'IC6-54', 'IC6-66', 'IC6-69', 'IC6-71', 'IC6-56', 'IC6-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-39',
      name: '',
      intervals: [2, 1, 3, 1, 1, 1, 3],
      parents: ['IC8-11', 'IC8-12', 'IC8-27', 'IC8-29', 'IC8-31'],
      children: ['IC6-12', 'IC6-55', 'IC6-53', 'IC6-48', 'IC6-72', 'IC6-73', 'IC6-31'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-40',
      name: '',
      intervals: [2, 1, 2, 2, 1, 1, 3],
      parents: ['IC8-11', 'IC8-13', 'IC8-28', 'IC8-38', 'IC8-42'],
      children: ['IC6-13', 'IC6-56', 'IC6-64', 'IC6-48', 'IC6-74', 'IC6-75', 'IC6-32'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-41',
      name: '',
      intervals: [2, 1, 2, 1, 2, 1, 3],
      parents: ['IC8-11', 'IC8-14', 'IC8-29', 'IC8-39', 'IC8-43'],
      children: ['IC6-14', 'IC6-57', 'IC6-65', 'IC6-72', 'IC6-74', 'IC6-33'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC7-42',
      name: '',
      intervals: [2, 1, 2, 1, 1, 2, 3],
      parents: ['IC8-11', 'IC8-15', 'IC8-30', 'IC8-39', 'IC8-40'],
      children: ['IC6-15', 'IC6-58', 'IC6-66', 'IC6-73', 'IC6-75', 'IC6-57', 'IC6-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-43',
      name: '',
      intervals: [2, 1, 1, 3, 1, 1, 3],
      parents: ['IC8-12', 'IC8-13', 'IC8-22', 'IC8-24', 'IC8-28'],
      children: ['IC6-16', 'IC6-59', 'IC6-67', 'IC6-48', 'IC6-38', 'IC6-64', 'IC6-34'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-44',
      name: '',
      intervals: [2, 1, 1, 2, 2, 1, 3],
      parents: ['IC8-12', 'IC8-14', 'IC8-31', 'IC8-39', 'IC8-41'],
      children: ['IC6-17', 'IC6-60', 'IC6-68', 'IC6-72', 'IC6-38', 'IC6-58', 'IC6-35'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-45',
      name: '',
      intervals: [2, 1, 1, 2, 1, 2, 3],
      parents: ['IC8-12', 'IC8-15', 'IC8-32', 'IC8-40', 'IC8-42'],
      children: ['IC6-18', 'IC6-61', 'IC6-69', 'IC6-73', 'IC6-64', 'IC6-58', 'IC6-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-46',
      name: '',
      intervals: [2, 1, 1, 1, 3, 1, 3],
      parents: ['IC8-13', 'IC8-14', 'IC8-16', 'IC8-18', 'IC8-23'],
      children: ['IC6-19', 'IC6-62', 'IC6-70', 'IC6-74', 'IC6-38', 'IC6-23', 'IC6-36'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-47',
      name: '',
      intervals: [2, 1, 1, 1, 2, 2, 3],
      parents: ['IC8-13', 'IC8-15', 'IC8-33', 'IC8-35', 'IC8-38'],
      children: ['IC6-20', 'IC6-63', 'IC6-71', 'IC6-75', 'IC6-64', 'IC6-23', 'IC6-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-48',
      name: '',
      intervals: [1, 2, 1, 1, 3, 1, 3],
      parents: ['IC8-16', 'IC8-19', 'IC8-20', 'IC8-24'],
      children: ['IC6-34', 'IC6-62', 'IC6-76', 'IC6-77', 'IC6-39', 'IC6-24', 'IC6-46'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-49',
      name: '',
      intervals: [1, 3, 1, 1, 2, 1, 3],
      parents: ['IC8-16', 'IC8-20', 'IC8-24', 'IC8-25'],
      children: ['IC6-25', 'IC6-52', 'IC6-44', 'IC6-70', 'IC6-76', 'IC6-59', 'IC6-40'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-50',
      name: '',
      intervals: [1, 3, 1, 1, 1, 2, 3],
      parents: ['IC8-16', 'IC8-21', 'IC8-26', 'IC8-28', 'IC8-29'],
      children: ['IC6-26', 'IC6-54', 'IC6-50', 'IC6-74', 'IC6-77', 'IC6-59', 'IC6-12'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-51',
      name: '',
      intervals: [1, 2, 3, 1, 1, 1, 3],
      parents: ['IC8-17', 'IC8-18', 'IC8-27', 'IC8-30', 'IC8-32'],
      children: ['IC6-27', 'IC6-55', 'IC6-19', 'IC6-49', 'IC6-73', 'IC6-78', 'IC6-41'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-52',
      name: '',
      intervals: [1, 2, 2, 2, 1, 1, 3],
      parents: ['IC8-17', 'IC8-19', 'IC8-28', 'IC8-36', 'IC8-37'],
      children: ['IC6-28', 'IC6-56', 'IC6-34', 'IC6-49', 'IC6-77', 'IC6-79', 'IC6-42'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-53',
      name: 'Harmonic Major Modes',
      intervals: [1, 2, 2, 1, 2, 1, 3],
      parents: ['IC8-17', 'IC8-20', 'IC8-29', 'IC8-39', 'IC8-40'],
      children: ['IC6-29', 'IC6-57', 'IC6-44', 'IC6-73', 'IC6-77', 'IC6-60', 'IC6-43'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }, {
      id: 'IC7-54',
      name: '',
      intervals: [1, 2, 2, 1, 1, 2, 3],
      parents: ['IC8-17', 'IC8-21', 'IC8-30', 'IC8-41', 'IC8-42'],
      children: ['IC6-30', 'IC6-58', 'IC6-50', 'IC6-78', 'IC6-79', 'IC6-60', 'IC6-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-55',
      name: '',
      intervals: [1, 2, 1, 3, 1, 1, 3],
      parents: ['IC8-18', 'IC8-19', 'IC8-22', 'IC8-25', 'IC8-29'],
      children: ['IC6-31', 'IC6-59', 'IC6-62', 'IC6-49', 'IC6-39', 'IC6-65', 'IC6-44'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-56',
      name: 'Harmonic Minor Modes',
      intervals: [1, 2, 1, 2, 2, 1, 3],
      parents: ['IC8-18', 'IC8-20', 'IC8-31', 'IC8-40', 'IC8-42'],
      children: ['IC6-32', 'IC6-60', 'IC6-70', 'IC6-73', 'IC6-39', 'IC6-61', 'IC6-45'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }, {
      id: 'IC7-57',
      name: '',
      intervals: [1, 2, 1, 2, 1, 2, 3],
      parents: ['IC8-18', 'IC8-21', 'IC8-32', 'IC8-42', 'IC8-43'],
      children: ['IC6-33', 'IC6-61', 'IC6-74', 'IC6-78', 'IC6-65', 'IC6-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC7-58',
      name: '',
      intervals: [1, 2, 1, 1, 2, 2, 3],
      parents: ['IC8-19', 'IC8-21', 'IC8-33', 'IC8-36', 'IC8-39'],
      children: ['IC6-35', 'IC6-63', 'IC6-77', 'IC6-79', 'IC6-65', 'IC6-24', 'IC6-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-59',
      name: '',
      intervals: [1, 1, 2, 3, 1, 1, 3],
      parents: ['IC8-22', 'IC8-23', 'IC8-24', 'IC8-26', 'IC8-30'],
      children: ['IC6-41', 'IC6-67', 'IC6-62', 'IC6-16', 'IC6-40', 'IC6-66', 'IC6-50'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-60',
      name: '',
      intervals: [1, 1, 2, 2, 2, 1, 3],
      parents: ['IC8-23', 'IC8-25', 'IC8-31', 'IC8-35', 'IC8-36'],
      children: ['IC6-42', 'IC6-68', 'IC6-70', 'IC6-31', 'IC6-40', 'IC6-63', 'IC6-51'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-61',
      name: '',
      intervals: [1, 1, 2, 2, 1, 2, 3],
      parents: ['IC8-23', 'IC8-26', 'IC8-32', 'IC8-38', 'IC8-39'],
      children: ['IC6-43', 'IC6-69', 'IC6-74', 'IC6-41', 'IC6-66', 'IC6-63', 'IC6-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-62',
      name: '',
      intervals: [1, 1, 2, 1, 2, 2, 3],
      parents: ['IC8-24', 'IC8-26', 'IC8-33', 'IC8-37', 'IC8-40'],
      children: ['IC6-45', 'IC6-71', 'IC6-77', 'IC6-67', 'IC6-66', 'IC6-25', 'IC6-18'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-63',
      name: '',
      intervals: [1, 1, 1, 2, 2, 2, 3],
      parents: ['IC8-28', 'IC8-30', 'IC8-33', 'IC8-34', 'IC8-35'],
      children: ['IC6-51', 'IC6-75', 'IC6-79', 'IC6-67', 'IC6-27', 'IC6-26', 'IC6-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-64',
      name: '',
      intervals: [2, 2, 1, 1, 2, 2, 2],
      parents: ['IC8-34', 'IC8-36', 'IC8-41'],
      children: ['IC6-35', 'IC6-51', 'IC6-79', 'IC6-80', 'IC6-68', 'IC6-28', 'IC6-30'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC7-65',
      name: 'Melodic Minor Modes',
      intervals: [2, 1, 2, 1, 2, 2, 2],
      parents: ['IC8-34', 'IC8-35', 'IC8-37', 'IC8-39', 'IC8-42'],
      children: ['IC6-45', 'IC6-75', 'IC6-79', 'IC6-68', 'IC6-69', 'IC6-29', 'IC6-33'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }, {
      id: 'IC7-66',
      name: 'Major Modes',
      intervals: [2, 1, 2, 2, 1, 2, 2],
      parents: ['IC8-35', 'IC8-37', 'IC8-38', 'IC8-40'],
      children: ['IC6-43', 'IC6-71', 'IC6-75', 'IC6-42', 'IC6-69', 'IC6-32'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }
  ], [ // 6
    {
      id: 'IC6-1',
      name: '',
      intervals: [1, 1, 1, 1, 1, 7],
      parents: ['IC7-1', 'IC7-2', 'IC7-7', 'IC7-8', 'IC7-28'],
      children: ['IC5-1', 'IC5-2', 'IC5-3', 'IC5-4', 'IC5-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-2',
      name: '',
      intervals: [2, 1, 1, 1, 1, 6],
      parents: ['IC7-1', 'IC7-2', 'IC7-3', 'IC7-9', 'IC7-13', 'IC7-29'],
      children: ['IC5-1', 'IC5-6', 'IC5-7', 'IC5-8', 'IC5-9', 'IC5-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-3',
      name: '',
      intervals: [1, 2, 1, 1, 1, 6],
      parents: ['IC7-1', 'IC7-3', 'IC7-4', 'IC7-10', 'IC7-18', 'IC7-30'],
      children: ['IC5-2', 'IC5-6', 'IC5-10', 'IC5-11', 'IC5-12', 'IC5-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-4',
      name: '',
      intervals: [1, 1, 2, 1, 1, 6],
      parents: ['IC7-1', 'IC7-4', 'IC7-5', 'IC7-11', 'IC7-22', 'IC7-31'],
      children: ['IC5-3', 'IC5-7', 'IC5-10', 'IC5-13', 'IC5-14', 'IC5-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-5',
      name: '',
      intervals: [1, 1, 1, 2, 1, 6],
      parents: ['IC7-1', 'IC7-5', 'IC7-6', 'IC7-12', 'IC7-25', 'IC7-32'],
      children: ['IC5-4', 'IC5-8', 'IC5-11', 'IC5-13', 'IC5-15', 'IC5-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-6',
      name: '',
      intervals: [1, 1, 1, 1, 2, 6],
      parents: ['IC7-1', 'IC7-6', 'IC7-7', 'IC7-13', 'IC7-27', 'IC7-33'],
      children: ['IC5-5', 'IC5-9', 'IC5-12', 'IC5-14', 'IC5-15', 'IC5-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-7',
      name: '',
      intervals: [3, 1, 1, 1, 1, 5],
      parents: ['IC7-2', 'IC7-3', 'IC7-8', 'IC7-14', 'IC7-33', 'IC7-34'],
      children: ['IC5-1', 'IC5-16', 'IC5-17', 'IC5-18', 'IC5-19', 'IC5-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-8',
      name: '',
      intervals: [2, 2, 1, 1, 1, 5],
      parents: ['IC7-2', 'IC7-4', 'IC7-9', 'IC7-15', 'IC7-35', 'IC7-38'],
      children: ['IC5-2', 'IC5-16', 'IC5-20', 'IC5-21', 'IC5-22', 'IC5-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-9',
      name: '',
      intervals: [2, 1, 2, 1, 1, 5],
      parents: ['IC7-2', 'IC7-5', 'IC7-10', 'IC7-16', 'IC7-36', 'IC7-42'],
      children: ['IC5-3', 'IC5-17', 'IC5-20', 'IC5-23', 'IC5-24', 'IC5-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-10',
      name: '',
      intervals: [2, 1, 1, 2, 1, 5],
      parents: ['IC7-2', 'IC7-6', 'IC7-11', 'IC7-17', 'IC7-37', 'IC7-45'],
      children: ['IC5-4', 'IC5-18', 'IC5-21', 'IC5-23', 'IC5-25', 'IC5-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-11',
      name: '',
      intervals: [2, 1, 1, 1, 2, 5],
      parents: ['IC7-2', 'IC7-7', 'IC7-12', 'IC7-18', 'IC7-38', 'IC7-47'],
      children: ['IC5-5', 'IC5-19', 'IC5-22', 'IC5-24', 'IC5-25', 'IC5-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-12',
      name: '',
      intervals: [1, 3, 1, 1, 1, 5],
      parents: ['IC7-3', 'IC7-4', 'IC7-14', 'IC7-19', 'IC7-39', 'IC7-50'],
      children: ['IC5-6', 'IC5-16', 'IC5-26', 'IC5-27', 'IC5-28', 'IC5-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-13',
      name: '',
      intervals: [1, 2, 2, 1, 1, 5],
      parents: ['IC7-3', 'IC7-5', 'IC7-15', 'IC7-20', 'IC7-40', 'IC7-54'],
      children: ['IC5-7', 'IC5-17', 'IC5-26', 'IC5-29', 'IC5-30', 'IC5-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-14',
      name: '',
      intervals: [1, 2, 1, 2, 1, 5],
      parents: ['IC7-3', 'IC7-6', 'IC7-16', 'IC7-21', 'IC7-41', 'IC7-57'],
      children: ['IC5-8', 'IC5-18', 'IC5-27', 'IC5-29', 'IC5-31', 'IC5-12'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-15',
      name: '',
      intervals: [1, 2, 1, 1, 2, 5],
      parents: ['IC7-3', 'IC7-7', 'IC7-17', 'IC7-22', 'IC7-42', 'IC7-58'],
      children: ['IC5-9', 'IC5-19', 'IC5-28', 'IC5-30', 'IC5-31', 'IC5-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-16',
      name: '',
      intervals: [1, 1, 3, 1, 1, 5],
      parents: ['IC7-4', 'IC7-5', 'IC7-19', 'IC7-23', 'IC7-43', 'IC7-59'],
      children: ['IC5-10', 'IC5-20', 'IC5-26', 'IC5-32', 'IC5-33', 'IC5-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-17',
      name: '',
      intervals: [1, 1, 2, 2, 1, 5],
      parents: ['IC7-4', 'IC7-6', 'IC7-20', 'IC7-24', 'IC7-44', 'IC7-61'],
      children: ['IC5-11', 'IC5-21', 'IC5-27', 'IC5-32', 'IC5-34', 'IC5-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-18',
      name: '',
      intervals: [1, 1, 2, 1, 2, 5],
      parents: ['IC7-4', 'IC7-7', 'IC7-21', 'IC7-25', 'IC7-45', 'IC7-62'],
      children: ['IC5-12', 'IC5-22', 'IC5-28', 'IC5-33', 'IC5-34', 'IC5-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-19',
      name: '',
      intervals: [1, 1, 1, 3, 1, 5],
      parents: ['IC7-5', 'IC7-6', 'IC7-23', 'IC7-26', 'IC7-46', 'IC7-51'],
      children: ['IC5-13', 'IC5-23', 'IC5-29', 'IC5-32', 'IC5-35', 'IC5-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-20',
      name: '',
      intervals: [1, 1, 1, 2, 2, 5],
      parents: ['IC7-5', 'IC7-7', 'IC7-24', 'IC7-27', 'IC7-47', 'IC7-63'],
      children: ['IC5-14', 'IC5-24', 'IC5-30', 'IC5-33', 'IC5-35', 'IC5-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-21',
      name: '',
      intervals: [1, 1, 1, 1, 3, 5],
      parents: ['IC7-6', 'IC7-7', 'IC7-26', 'IC7-28', 'IC7-29', 'IC7-34'],
      children: ['IC5-15', 'IC5-25', 'IC5-31', 'IC5-34', 'IC5-35', 'IC5-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-22',
      name: '',
      intervals: [4, 1, 1, 1, 1, 4],
      parents: ['IC7-8', 'IC7-9', 'IC7-14', 'IC7-26', 'IC7-27', 'IC7-28'],
      children: ['IC5-1', 'IC5-35', 'IC5-36', 'IC5-37', 'IC5-38', 'IC5-16'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-23',
      name: '',
      intervals: [3, 2, 1, 1, 1, 4],
      parents: ['IC7-8', 'IC7-10', 'IC7-15', 'IC7-29', 'IC7-46', 'IC7-47'],
      children: ['IC5-2', 'IC5-35', 'IC5-39', 'IC5-40', 'IC5-41', 'IC5-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-24',
      name: '',
      intervals: [3, 1, 2, 1, 1, 4],
      parents: ['IC7-8', 'IC7-11', 'IC7-16', 'IC7-30', 'IC7-48', 'IC7-58'],
      children: ['IC5-3', 'IC5-36', 'IC5-39', 'IC5-42', 'IC5-43', 'IC5-18'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-25',
      name: '',
      intervals: [3, 1, 1, 2, 1, 4],
      parents: ['IC7-8', 'IC7-12', 'IC7-17', 'IC7-31', 'IC7-49', 'IC7-62'],
      children: ['IC5-4', 'IC5-37', 'IC5-40', 'IC5-42', 'IC5-44', 'IC5-19'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-26',
      name: '',
      intervals: [3, 1, 1, 1, 2, 4],
      parents: ['IC7-8', 'IC7-13', 'IC7-18', 'IC7-32', 'IC7-50', 'IC7-63'],
      children: ['IC5-5', 'IC5-38', 'IC5-41', 'IC5-43', 'IC5-44', 'IC5-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-27',
      name: '',
      intervals: [2, 3, 1, 1, 1, 4],
      parents: ['IC7-9', 'IC7-10', 'IC7-19', 'IC7-34', 'IC7-51', 'IC7-63'],
      children: ['IC5-6', 'IC5-35', 'IC5-45', 'IC5-46', 'IC5-47', 'IC5-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-28',
      name: '',
      intervals: [2, 2, 2, 1, 1, 4],
      parents: ['IC7-9', 'IC7-11', 'IC7-20', 'IC7-35', 'IC7-52', 'IC7-64'],
      children: ['IC5-7', 'IC5-36', 'IC5-45', 'IC5-48', 'IC5-49', 'IC5-21'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-29',
      name: 'Altered Hexatonic Modes',
      intervals: [2, 2, 1, 2, 1, 4],
      parents: ['IC7-9', 'IC7-12', 'IC7-21', 'IC7-36', 'IC7-53', 'IC7-65'],
      children: ['IC5-8', 'IC5-37', 'IC5-46', 'IC5-48', 'IC5-50', 'IC5-22'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-30',
      name: '',
      intervals: [2, 2, 1, 1, 2, 4],
      parents: ['IC7-9', 'IC7-13', 'IC7-22', 'IC7-37', 'IC7-54', 'IC7-64'],
      children: ['IC5-9', 'IC5-38', 'IC5-47', 'IC5-49', 'IC5-50', 'IC5-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-31',
      name: '',
      intervals: [2, 1, 3, 1, 1, 4],
      parents: ['IC7-10', 'IC7-11', 'IC7-23', 'IC7-39', 'IC7-55', 'IC7-60'],
      children: ['IC5-10', 'IC5-39', 'IC5-45', 'IC5-51', 'IC5-52', 'IC5-23'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-32',
      name: '',
      intervals: [2, 1, 2, 2, 1, 4],
      parents: ['IC7-10', 'IC7-12', 'IC7-24', 'IC7-40', 'IC7-56', 'IC7-66'],
      children: ['IC5-11', 'IC5-40', 'IC5-46', 'IC5-51', 'IC5-53', 'IC5-24'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-33',
      name: '',
      intervals: [2, 1, 2, 1, 2, 4],
      parents: ['IC7-10', 'IC7-13', 'IC7-25', 'IC7-41', 'IC7-57', 'IC7-65'],
      children: ['IC5-12', 'IC5-41', 'IC5-47', 'IC5-52', 'IC5-53', 'IC5-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-34',
      name: '',
      intervals: [2, 1, 1, 3, 1, 4],
      parents: ['IC7-11', 'IC7-12', 'IC7-26', 'IC7-43', 'IC7-48', 'IC7-52'],
      children: ['IC5-13', 'IC5-42', 'IC5-48', 'IC5-51', 'IC5-36', 'IC5-25'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-35',
      name: '',
      intervals: [2, 1, 1, 2, 2, 4],
      parents: ['IC7-11', 'IC7-13', 'IC7-27', 'IC7-44', 'IC7-58', 'IC7-64'],
      children: ['IC5-14', 'IC5-43', 'IC5-49', 'IC5-52', 'IC5-36', 'IC5-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-36',
      name: '',
      intervals: [2, 1, 1, 1, 3, 4],
      parents: ['IC7-12', 'IC7-13', 'IC7-28', 'IC7-30', 'IC7-35', 'IC7-46'],
      children: ['IC5-15', 'IC5-44', 'IC5-50', 'IC5-53', 'IC5-36', 'IC5-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-37',
      name: '',
      intervals: [1, 4, 1, 1, 1, 4],
      parents: ['IC7-14', 'IC7-15', 'IC7-19', 'IC7-23', 'IC7-24', 'IC7-26'],
      children: ['IC5-16', 'IC5-35', 'IC5-32', 'IC5-51', 'IC5-54', 'IC5-26'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-38',
      name: '',
      intervals: [1, 3, 2, 1, 1, 4],
      parents: ['IC7-14', 'IC7-16', 'IC7-20', 'IC7-43', 'IC7-44', 'IC7-46'],
      children: ['IC5-17', 'IC5-36', 'IC5-32', 'IC5-55', 'IC5-56', 'IC5-27'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-39',
      name: '',
      intervals: [1, 3, 1, 2, 1, 4],
      parents: ['IC7-14', 'IC7-17', 'IC7-21', 'IC7-48', 'IC7-55', 'IC7-56'],
      children: ['IC5-18', 'IC5-37', 'IC5-51', 'IC5-55', 'IC5-57', 'IC5-28'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-40',
      name: '',
      intervals: [1, 3, 1, 1, 2, 4],
      parents: ['IC7-14', 'IC7-18', 'IC7-22', 'IC7-49', 'IC7-59', 'IC7-60'],
      children: ['IC5-19', 'IC5-38', 'IC5-54', 'IC5-56', 'IC5-57', 'IC5-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-41',
      name: '',
      intervals: [1, 2, 3, 1, 1, 4],
      parents: ['IC7-15', 'IC7-16', 'IC7-23', 'IC7-51', 'IC7-59', 'IC7-61'],
      children: ['IC5-20', 'IC5-39', 'IC5-32', 'IC5-54', 'IC5-58', 'IC5-29'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-42',
      name: '',
      intervals: [1, 2, 2, 2, 1, 4],
      parents: ['IC7-15', 'IC7-17', 'IC7-24', 'IC7-52', 'IC7-60', 'IC7-66'],
      children: ['IC5-21', 'IC5-40', 'IC5-51', 'IC5-54', 'IC5-59', 'IC5-30'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-43',
      name: '',
      intervals: [1, 2, 2, 1, 2, 4],
      parents: ['IC7-15', 'IC7-18', 'IC7-25', 'IC7-53', 'IC7-61', 'IC7-66'],
      children: ['IC5-22', 'IC5-41', 'IC5-54', 'IC5-58', 'IC5-59', 'IC5-11'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-44',
      name: '',
      intervals: [1, 2, 1, 3, 1, 4],
      parents: ['IC7-16', 'IC7-17', 'IC7-26', 'IC7-49', 'IC7-53', 'IC7-55'],
      children: ['IC5-23', 'IC5-42', 'IC5-55', 'IC5-54', 'IC5-37', 'IC5-31'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-45',
      name: '',
      intervals: [1, 2, 1, 2, 2, 4],
      parents: ['IC7-16', 'IC7-18', 'IC7-27', 'IC7-56', 'IC7-62', 'IC7-65'],
      children: ['IC5-24', 'IC5-43', 'IC5-56', 'IC5-58', 'IC5-37', 'IC5-12'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-46',
      name: '',
      intervals: [1, 2, 1, 1, 3, 4],
      parents: ['IC7-17', 'IC7-18', 'IC7-28', 'IC7-31', 'IC7-36', 'IC7-48'],
      children: ['IC5-25', 'IC5-44', 'IC5-57', 'IC5-59', 'IC5-37', 'IC5-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-47',
      name: '',
      intervals: [1, 1, 4, 1, 1, 4],
      parents: ['IC7-19', 'IC7-20', 'IC7-23'],
      children: ['IC5-26', 'IC5-45', 'IC5-32'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-48',
      name: '',
      intervals: [1, 1, 3, 2, 1, 4],
      parents: ['IC7-19', 'IC7-21', 'IC7-24', 'IC7-39', 'IC7-40', 'IC7-43'],
      children: ['IC5-27', 'IC5-46', 'IC5-51', 'IC5-26', 'IC5-60', 'IC5-33'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-49',
      name: '',
      intervals: [1, 1, 3, 1, 2, 4],
      parents: ['IC7-19', 'IC7-22', 'IC7-25', 'IC7-51', 'IC7-52', 'IC7-55'],
      children: ['IC5-28', 'IC5-47', 'IC5-54', 'IC5-45', 'IC5-60', 'IC5-13'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-50',
      name: '',
      intervals: [1, 1, 2, 3, 1, 4],
      parents: ['IC7-20', 'IC7-21', 'IC7-26', 'IC7-50', 'IC7-54', 'IC7-59'],
      children: ['IC5-29', 'IC5-48', 'IC5-55', 'IC5-26', 'IC5-38', 'IC5-34'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-51',
      name: '',
      intervals: [1, 1, 2, 2, 2, 4],
      parents: ['IC7-20', 'IC7-22', 'IC7-27', 'IC7-60', 'IC7-63', 'IC7-64'],
      children: ['IC5-30', 'IC5-49', 'IC5-56', 'IC5-45', 'IC5-38', 'IC5-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-52',
      name: '',
      intervals: [1, 1, 2, 1, 3, 4],
      parents: ['IC7-21', 'IC7-22', 'IC7-28', 'IC7-32', 'IC7-37', 'IC7-49'],
      children: ['IC5-31', 'IC5-50', 'IC5-57', 'IC5-60', 'IC5-38', 'IC5-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-53',
      name: '',
      intervals: [1, 1, 1, 3, 2, 4],
      parents: ['IC7-23', 'IC7-25', 'IC7-27', 'IC7-34', 'IC7-35', 'IC7-39'],
      children: ['IC5-33', 'IC5-52', 'IC5-58', 'IC5-45', 'IC5-16', 'IC5-15'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-54',
      name: '',
      intervals: [1, 1, 1, 2, 3, 4],
      parents: ['IC7-24', 'IC7-25', 'IC7-28', 'IC7-33', 'IC7-38', 'IC7-50'],
      children: ['IC5-34', 'IC5-53', 'IC5-59', 'IC5-60', 'IC5-16', 'IC5-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-55',
      name: '',
      intervals: [3, 1, 1, 1, 3, 3],
      parents: ['IC7-29', 'IC7-30', 'IC7-32', 'IC7-33', 'IC7-39', 'IC7-51'],
      children: ['IC5-15', 'IC5-60', 'IC5-61', 'IC5-62', 'IC5-39', 'IC5-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-56',
      name: '',
      intervals: [2, 2, 1, 1, 3, 3],
      parents: ['IC7-29', 'IC7-31', 'IC7-37', 'IC7-38', 'IC7-40', 'IC7-52'],
      children: ['IC5-25', 'IC5-60', 'IC5-63', 'IC5-64', 'IC5-40', 'IC5-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-57',
      name: '',
      intervals: [2, 1, 2, 1, 3, 3],
      parents: ['IC7-29', 'IC7-32', 'IC7-41', 'IC7-42', 'IC7-53'],
      children: ['IC5-31', 'IC5-61', 'IC5-63', 'IC5-41', 'IC5-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-58',
      name: '',
      intervals: [2, 1, 1, 2, 3, 3],
      parents: ['IC7-29', 'IC7-33', 'IC7-42', 'IC7-44', 'IC7-45', 'IC7-54'],
      children: ['IC5-34', 'IC5-62', 'IC5-64', 'IC5-61', 'IC5-17', 'IC5-9'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-59',
      name: '',
      intervals: [1, 3, 1, 1, 3, 3],
      parents: ['IC7-30', 'IC7-31', 'IC7-43', 'IC7-49', 'IC7-50', 'IC7-55'],
      children: ['IC5-44', 'IC5-60', 'IC5-55', 'IC5-65', 'IC5-42', 'IC5-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-60',
      name: '',
      intervals: [1, 2, 2, 1, 3, 3],
      parents: ['IC7-30', 'IC7-32', 'IC7-44', 'IC7-53', 'IC7-54', 'IC7-56'],
      children: ['IC5-50', 'IC5-61', 'IC5-55', 'IC5-62', 'IC5-43', 'IC5-11'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-61',
      name: '',
      intervals: [3, 1, 2, 1, 2, 3],
      parents: ['IC7-30', 'IC7-33', 'IC7-45', 'IC7-56', 'IC7-57'],
      children: ['IC5-12', 'IC5-53', 'IC5-62', 'IC5-65', 'IC5-18'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-62',
      name: '',
      intervals: [3, 1, 1, 3, 1, 3],
      parents: ['IC7-31', 'IC7-32', 'IC7-46', 'IC7-48', 'IC7-55', 'IC7-59'],
      children: ['IC5-13', 'IC5-57', 'IC5-63', 'IC5-55', 'IC5-39', 'IC5-44'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-63',
      name: '',
      intervals: [3, 1, 1, 2, 2, 3],
      parents: ['IC7-31', 'IC7-33', 'IC7-47', 'IC7-58', 'IC7-60', 'IC7-61'],
      children: ['IC5-14', 'IC5-59', 'IC5-64', 'IC5-65', 'IC5-39', 'IC5-19'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-64',
      name: 'Blues Modes',
      intervals: [2, 3, 2, 1, 1, 3],
      parents: ['IC7-34', 'IC7-36', 'IC7-40', 'IC7-43', 'IC7-45', 'IC7-47'],
      children: ['IC5-17', 'IC5-25', 'IC5-33', 'IC5-65', 'IC5-66', 'IC5-46'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-65',
      name: '',
      intervals: [2, 3, 1, 2, 1, 3],
      parents: ['IC7-34', 'IC7-37', 'IC7-41', 'IC7-55', 'IC7-57', 'IC7-58'],
      children: ['IC5-18', 'IC5-31', 'IC5-52', 'IC5-65', 'IC5-63', 'IC5-47'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-66',
      name: '',
      intervals: [2, 3, 1, 1, 2, 3],
      parents: ['IC7-34', 'IC7-38', 'IC7-42', 'IC7-59', 'IC7-61', 'IC7-62'],
      children: ['IC5-19', 'IC5-34', 'IC5-58', 'IC5-66', 'IC5-63', 'IC5-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-67',
      name: '',
      intervals: [2, 2, 3, 1, 1, 3],
      parents: ['IC7-35', 'IC7-36', 'IC7-43', 'IC7-59', 'IC7-62', 'IC7-63'],
      children: ['IC5-20', 'IC5-44', 'IC5-33', 'IC5-56', 'IC5-66', 'IC5-48'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC6-68',
      name: '',
      intervals: [2, 2, 2, 2, 1, 3],
      parents: ['IC7-35', 'IC7-37', 'IC7-44', 'IC7-60', 'IC7-64', 'IC7-65'],
      children: ['IC5-21', 'IC5-50', 'IC5-52', 'IC5-56', 'IC5-64', 'IC5-49'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-69',
      name: '',
      intervals: [2, 2, 2, 1, 2, 3],
      parents: ['IC7-35', 'IC7-38', 'IC7-45', 'IC7-61', 'IC7-65', 'IC7-66'],
      children: ['IC5-22', 'IC5-53', 'IC5-58', 'IC5-66', 'IC5-64', 'IC5-21'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-70',
      name: '',
      intervals: [2, 2, 1, 3, 1, 3],
      parents: ['IC7-36', 'IC7-37', 'IC7-46', 'IC7-49', 'IC7-56', 'IC7-60'],
      children: ['IC5-23', 'IC5-57', 'IC5-65', 'IC5-56', 'IC5-40', 'IC5-50'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-71',
      name: '',
      intervals: [2, 2, 1, 2, 2, 3],
      parents: ['IC7-36', 'IC7-38', 'IC7-47', 'IC7-62', 'IC7-66'],
      children: ['IC5-24', 'IC5-59', 'IC5-66', 'IC5-40', 'IC5-22'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-72',
      name: '',
      intervals: [2, 1, 3, 2, 1, 3],
      parents: ['IC7-39', 'IC7-41', 'IC7-44'],
      children: ['IC5-27', 'IC5-61', 'IC5-52'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-73',
      name: '',
      intervals: [2, 1, 3, 1, 2, 3],
      parents: ['IC7-39', 'IC7-42', 'IC7-45', 'IC7-51', 'IC7-53', 'IC7-56'],
      children: ['IC5-28', 'IC5-62', 'IC5-58', 'IC5-46', 'IC5-61', 'IC5-23'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-74',
      name: '',
      intervals: [2, 1, 2, 3, 1, 3],
      parents: ['IC7-40', 'IC7-41', 'IC7-46', 'IC7-50', 'IC7-57', 'IC7-61'],
      children: ['IC5-29', 'IC5-63', 'IC5-65', 'IC5-27', 'IC5-41', 'IC5-53'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-75',
      name: '',
      intervals: [2, 1, 2, 2, 2, 3],
      parents: ['IC7-40', 'IC7-42', 'IC7-47', 'IC7-63', 'IC7-65', 'IC7-66'],
      children: ['IC5-30', 'IC5-64', 'IC5-66', 'IC5-46', 'IC5-41', 'IC5-24'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-76',
      name: 'Augmented Modes',
      intervals: [1, 3, 1, 3, 1, 3],
      parents: ['IC7-48', 'IC7-49'],
      children: ['IC5-42', 'IC5-57'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }, {
      id: 'IC6-77',
      name: '',
      intervals: [1, 2, 2, 3, 1, 3],
      parents: ['IC7-48', 'IC7-50', 'IC7-52', 'IC7-53', 'IC7-58', 'IC7-62'],
      children: ['IC5-48', 'IC5-63', 'IC5-42', 'IC5-28', 'IC5-43', 'IC5-59'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-78',
      name: '',
      intervals: [1, 2, 3, 1, 2, 3],
      parents: ['IC7-51', 'IC7-54', 'IC7-57'],
      children: ['IC5-47', 'IC5-62', 'IC5-29'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-79',
      name: '',
      intervals: [1, 2, 2, 2, 2, 3],
      parents: ['IC7-52', 'IC7-54', 'IC7-58', 'IC7-63', 'IC7-64', 'IC7-65'],
      children: ['IC5-49', 'IC5-64', 'IC5-48', 'IC5-47', 'IC5-43', 'IC5-30'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC6-80',
      name: 'Whole Tone Scale',
      intervals: [2, 2, 2, 2, 2, 2],
      parents: ['IC7-64'],
      children: ['IC5-49'],
      root: 0,
      cohemitonic: false,
      saturated: true
    }
  ], [ // 5
    {
      id: 'IC5-1',
      name: '',
      intervals: [1, 1, 1, 1, 8],
      parents: ['IC6-1', 'IC6-2', 'IC6-6', 'IC6-7', 'IC6-21', 'IC6-22'],
      children: ['IC4-1', 'IC4-2', 'IC4-3', 'IC4-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-2',
      name: '',
      intervals: [2, 1, 1, 1, 7],
      parents: ['IC6-1', 'IC6-2', 'IC6-3', 'IC6-8', 'IC6-11', 'IC6-23', 'IC6-36'],
      children: ['IC4-1', 'IC4-5', 'IC4-6', 'IC4-7', 'IC4-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-3',
      name: '',
      intervals: [1, 2, 1, 1, 7],
      parents: ['IC6-1', 'IC6-3', 'IC6-4', 'IC6-9', 'IC6-15', 'IC6-24', 'IC6-46'],
      children: ['IC4-2', 'IC4-5', 'IC4-8', 'IC4-9', 'IC4-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-4',
      name: '',
      intervals: [1, 1, 2, 1, 7],
      parents: ['IC6-1', 'IC6-4', 'IC6-5', 'IC6-10', 'IC6-18', 'IC6-25', 'IC6-52'],
      children: ['IC4-3', 'IC4-6', 'IC4-8', 'IC4-10', 'IC4-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-5',
      name: '',
      intervals: [1, 1, 1, 2, 7],
      parents: ['IC6-1', 'IC6-5', 'IC6-6', 'IC6-11', 'IC6-20', 'IC6-26', 'IC6-54'],
      children: ['IC4-4', 'IC4-7', 'IC4-9', 'IC4-10', 'IC4-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-6',
      name: '',
      intervals: [3, 1, 1, 1, 6],
      parents: ['IC6-2', 'IC6-3', 'IC6-7', 'IC6-12', 'IC6-26', 'IC6-27', 'IC6-55'],
      children: ['IC4-1', 'IC4-11', 'IC4-12', 'IC4-13', 'IC4-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-7',
      name: '',
      intervals: [2, 2, 1, 1, 6],
      parents: ['IC6-2', 'IC6-4', 'IC6-8', 'IC6-13', 'IC6-28', 'IC6-30', 'IC6-56'],
      children: ['IC4-2', 'IC4-11', 'IC4-14', 'IC4-15', 'IC4-6'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-8',
      name: '',
      intervals: [2, 1, 2, 1, 6],
      parents: ['IC6-2', 'IC6-5', 'IC6-9', 'IC6-14', 'IC6-29', 'IC6-33', 'IC6-57'],
      children: ['IC4-3', 'IC4-12', 'IC4-14', 'IC4-16', 'IC4-7'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-9',
      name: '',
      intervals: [2, 1, 1, 2, 6],
      parents: ['IC6-2', 'IC6-6', 'IC6-10', 'IC6-15', 'IC6-30', 'IC6-35', 'IC6-58'],
      children: ['IC4-4', 'IC4-13', 'IC4-15', 'IC4-16', 'IC4-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-10',
      name: '',
      intervals: [1, 3, 1, 1, 6],
      parents: ['IC6-3', 'IC6-4', 'IC6-12', 'IC6-16', 'IC6-31', 'IC6-40', 'IC6-59'],
      children: ['IC4-5', 'IC4-11', 'IC4-17', 'IC4-18', 'IC4-8'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-11',
      name: '',
      intervals: [1, 2, 2, 1, 6],
      parents: ['IC6-3', 'IC6-5', 'IC6-13', 'IC6-17', 'IC6-32', 'IC6-43', 'IC6-60'],
      children: ['IC4-6', 'IC4-12', 'IC4-17', 'IC4-19', 'IC4-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-12',
      name: '',
      intervals: [1, 2, 1, 2, 6],
      parents: ['IC6-3', 'IC6-6', 'IC6-14', 'IC6-18', 'IC6-33', 'IC6-45', 'IC6-61'],
      children: ['IC4-7', 'IC4-13', 'IC4-18', 'IC4-19', 'IC4-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-13',
      name: '',
      intervals: [1, 1, 3, 1, 6],
      parents: ['IC6-4', 'IC6-5', 'IC6-16', 'IC6-19', 'IC6-34', 'IC6-49', 'IC6-62'],
      children: ['IC4-8', 'IC4-14', 'IC4-17', 'IC4-20', 'IC4-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-14',
      name: '',
      intervals: [1, 1, 2, 2, 6],
      parents: ['IC6-4', 'IC6-6', 'IC6-17', 'IC6-20', 'IC6-35', 'IC6-51', 'IC6-63'],
      children: ['IC4-9', 'IC4-15', 'IC4-18', 'IC4-20', 'IC4-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-15',
      name: '',
      intervals: [1, 1, 1, 3, 6],
      parents: ['IC6-5', 'IC6-6', 'IC6-19', 'IC6-21', 'IC6-36', 'IC6-53', 'IC6-55'],
      children: ['IC4-10', 'IC4-16', 'IC4-19', 'IC4-20', 'IC4-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-16',
      name: '',
      intervals: [4, 1, 1, 1, 5],
      parents: ['IC6-7', 'IC6-8', 'IC6-12', 'IC6-22', 'IC6-37', 'IC6-53', 'IC6-54'],
      children: ['IC4-1', 'IC4-21', 'IC4-22', 'IC4-23', 'IC4-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-17',
      name: '',
      intervals: [3, 2, 1, 1, 5],
      parents: ['IC6-7', 'IC6-9', 'IC6-13', 'IC6-23', 'IC6-38', 'IC6-58', 'IC6-64'],
      children: ['IC4-2', 'IC4-21', 'IC4-24', 'IC4-25', 'IC4-12'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-18',
      name: '',
      intervals: [3, 1, 2, 1, 5],
      parents: ['IC6-7', 'IC6-10', 'IC6-14', 'IC6-24', 'IC6-39', 'IC6-61', 'IC6-65'],
      children: ['IC4-3', 'IC4-22', 'IC4-24', 'IC4-26', 'IC4-13'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-19',
      name: '',
      intervals: [3, 1, 1, 2, 5],
      parents: ['IC6-7', 'IC6-11', 'IC6-15', 'IC6-25', 'IC6-40', 'IC6-63', 'IC6-66'],
      children: ['IC4-4', 'IC4-23', 'IC4-25', 'IC4-26', 'IC4-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-20',
      name: '',
      intervals: [2, 3, 1, 1, 5],
      parents: ['IC6-8', 'IC6-9', 'IC6-16', 'IC6-27', 'IC6-41', 'IC6-66', 'IC6-67'],
      children: ['IC4-5', 'IC4-21', 'IC4-27', 'IC4-28', 'IC4-14'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-21',
      name: '',
      intervals: [2, 2, 2, 1, 5],
      parents: ['IC6-8', 'IC6-10', 'IC6-17', 'IC6-28', 'IC6-42', 'IC6-68', 'IC6-69'],
      children: ['IC4-6', 'IC4-22', 'IC4-27', 'IC4-29', 'IC4-15'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-22',
      name: '',
      intervals: [2, 2, 1, 2, 5],
      parents: ['IC6-8', 'IC6-11', 'IC6-18', 'IC6-29', 'IC6-43', 'IC6-69', 'IC6-71'],
      children: ['IC4-7', 'IC4-23', 'IC4-28', 'IC4-29', 'IC4-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-23',
      name: '',
      intervals: [2, 1, 3, 1, 5],
      parents: ['IC6-9', 'IC6-10', 'IC6-19', 'IC6-31', 'IC6-44', 'IC6-70', 'IC6-73'],
      children: ['IC4-8', 'IC4-24', 'IC4-27', 'IC4-30', 'IC4-16'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-24',
      name: '',
      intervals: [2, 1, 2, 2, 5],
      parents: ['IC6-9', 'IC6-11', 'IC6-20', 'IC6-32', 'IC6-45', 'IC6-71', 'IC6-75'],
      children: ['IC4-9', 'IC4-25', 'IC4-28', 'IC4-30', 'IC4-7'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-25',
      name: '',
      intervals: [2, 1, 1, 3, 5],
      parents: ['IC6-10', 'IC6-11', 'IC6-21', 'IC6-34', 'IC6-46', 'IC6-56', 'IC6-64'],
      children: ['IC4-10', 'IC4-26', 'IC4-29', 'IC4-30', 'IC4-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-26',
      name: '',
      intervals: [1, 4, 1, 1, 5],
      parents: ['IC6-12', 'IC6-13', 'IC6-16', 'IC6-37', 'IC6-47', 'IC6-48', 'IC6-50'],
      children: ['IC4-11', 'IC4-21', 'IC4-31', 'IC4-32', 'IC4-17'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-27',
      name: '',
      intervals: [1, 3, 2, 1, 5],
      parents: ['IC6-12', 'IC6-14', 'IC6-17', 'IC6-38', 'IC6-48', 'IC6-72', 'IC6-74'],
      children: ['IC4-12', 'IC4-22', 'IC4-31', 'IC4-33', 'IC4-18'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-28',
      name: '',
      intervals: [1, 3, 1, 2, 5],
      parents: ['IC6-12', 'IC6-15', 'IC6-18', 'IC6-39', 'IC6-49', 'IC6-73', 'IC6-77'],
      children: ['IC4-13', 'IC4-23', 'IC4-32', 'IC4-33', 'IC4-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-29',
      name: '',
      intervals: [1, 2, 3, 1, 5],
      parents: ['IC6-13', 'IC6-14', 'IC6-19', 'IC6-41', 'IC6-50', 'IC6-74', 'IC6-78'],
      children: ['IC4-14', 'IC4-24', 'IC4-31', 'IC4-34', 'IC4-19'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-30',
      name: '',
      intervals: [1, 2, 2, 2, 5],
      parents: ['IC6-13', 'IC6-15', 'IC6-20', 'IC6-42', 'IC6-51', 'IC6-75', 'IC6-79'],
      children: ['IC4-15', 'IC4-25', 'IC4-32', 'IC4-34', 'IC4-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-31',
      name: '',
      intervals: [1, 2, 1, 3, 5],
      parents: ['IC6-14', 'IC6-15', 'IC6-21', 'IC6-44', 'IC6-52', 'IC6-57', 'IC6-65'],
      children: ['IC4-16', 'IC4-26', 'IC4-33', 'IC4-34', 'IC4-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-32',
      name: '',
      intervals: [1, 1, 4, 1, 5],
      parents: ['IC6-16', 'IC6-17', 'IC6-19', 'IC6-37', 'IC6-38', 'IC6-41', 'IC6-47'],
      children: ['IC4-17', 'IC4-27', 'IC4-31', 'IC4-21', 'IC4-20'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-33',
      name: '',
      intervals: [1, 1, 3, 2, 5],
      parents: ['IC6-16', 'IC6-18', 'IC6-20', 'IC6-48', 'IC6-53', 'IC6-64', 'IC6-67'],
      children: ['IC4-18', 'IC4-28', 'IC4-32', 'IC4-21', 'IC4-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-34',
      name: '',
      intervals: [1, 1, 2, 3, 5],
      parents: ['IC6-17', 'IC6-18', 'IC6-21', 'IC6-50', 'IC6-54', 'IC6-58', 'IC6-66'],
      children: ['IC4-19', 'IC4-29', 'IC4-33', 'IC4-21', 'IC4-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-35',
      name: '',
      intervals: [1, 1, 1, 4, 5],
      parents: ['IC6-19', 'IC6-20', 'IC6-21', 'IC6-22', 'IC6-23', 'IC6-27', 'IC6-37'],
      children: ['IC4-20', 'IC4-30', 'IC4-34', 'IC4-21', 'IC4-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-36',
      name: '',
      intervals: [2, 1, 1, 4, 4],
      parents: ['IC6-22', 'IC6-24', 'IC6-28', 'IC6-34', 'IC6-35', 'IC6-36', 'IC6-38'],
      children: ['IC4-20', 'IC4-35', 'IC4-36', 'IC4-22', 'IC4-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-37',
      name: '',
      intervals: [4, 1, 2, 1, 4],
      parents: ['IC6-22', 'IC6-25', 'IC6-29', 'IC6-39', 'IC6-44', 'IC6-45', 'IC6-46'],
      children: ['IC4-3', 'IC4-30', 'IC4-35', 'IC4-37', 'IC4-23'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-38',
      name: '',
      intervals: [4, 1, 1, 2, 4],
      parents: ['IC6-22', 'IC6-26', 'IC6-30', 'IC6-40', 'IC6-50', 'IC6-51', 'IC6-52'],
      children: ['IC4-4', 'IC4-34', 'IC4-36', 'IC4-37', 'IC4-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-39',
      name: '',
      intervals: [3, 3, 1, 1, 4],
      parents: ['IC6-23', 'IC6-24', 'IC6-31', 'IC6-41', 'IC6-55', 'IC6-62', 'IC6-63'],
      children: ['IC4-5', 'IC4-20', 'IC4-38', 'IC4-39', 'IC4-24'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-40',
      name: '',
      intervals: [3, 2, 2, 1, 4],
      parents: ['IC6-23', 'IC6-25', 'IC6-32', 'IC6-42', 'IC6-56', 'IC6-70', 'IC6-71'],
      children: ['IC4-6', 'IC4-30', 'IC4-38', 'IC4-40', 'IC4-25'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-41',
      name: '',
      intervals: [3, 2, 1, 2, 4],
      parents: ['IC6-23', 'IC6-26', 'IC6-33', 'IC6-43', 'IC6-57', 'IC6-74', 'IC6-75'],
      children: ['IC4-7', 'IC4-34', 'IC4-39', 'IC4-40', 'IC4-12'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-42',
      name: '',
      intervals: [3, 1, 3, 1, 4],
      parents: ['IC6-24', 'IC6-25', 'IC6-34', 'IC6-44', 'IC6-59', 'IC6-76', 'IC6-77'],
      children: ['IC4-8', 'IC4-35', 'IC4-38', 'IC4-26'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-43',
      name: '',
      intervals: [3, 1, 2, 2, 4],
      parents: ['IC6-24', 'IC6-26', 'IC6-35', 'IC6-45', 'IC6-60', 'IC6-77', 'IC6-79'],
      children: ['IC4-9', 'IC4-36', 'IC4-39', 'IC4-35', 'IC4-13'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-44',
      name: '',
      intervals: [3, 1, 1, 3, 4],
      parents: ['IC6-25', 'IC6-26', 'IC6-36', 'IC6-46', 'IC6-59', 'IC6-62', 'IC6-67'],
      children: ['IC4-10', 'IC4-37', 'IC4-40', 'IC4-35', 'IC4-5'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-45',
      name: '',
      intervals: [2, 4, 1, 1, 4],
      parents: ['IC6-27', 'IC6-28', 'IC6-31', 'IC6-47', 'IC6-49', 'IC6-51', 'IC6-53'],
      children: ['IC4-11', 'IC4-20', 'IC4-32', 'IC4-41', 'IC4-27'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-46',
      name: '',
      intervals: [2, 3, 2, 1, 4],
      parents: ['IC6-27', 'IC6-29', 'IC6-32', 'IC6-48', 'IC6-64', 'IC6-73', 'IC6-75'],
      children: ['IC4-12', 'IC4-30', 'IC4-32', 'IC4-42', 'IC4-28'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-47',
      name: '',
      intervals: [2, 3, 1, 2, 4],
      parents: ['IC6-27', 'IC6-30', 'IC6-33', 'IC6-49', 'IC6-65', 'IC6-78', 'IC6-79'],
      children: ['IC4-13', 'IC4-34', 'IC4-41', 'IC4-42', 'IC4-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-48',
      name: '',
      intervals: [2, 2, 3, 1, 4],
      parents: ['IC6-28', 'IC6-29', 'IC6-34', 'IC6-50', 'IC6-67', 'IC6-77', 'IC6-79'],
      children: ['IC4-14', 'IC4-35', 'IC4-32', 'IC4-36', 'IC4-29'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-49',
      name: '',
      intervals: [2, 2, 2, 2, 4],
      parents: ['IC6-28', 'IC6-30', 'IC6-35', 'IC6-51', 'IC6-68', 'IC6-79', 'IC6-80'],
      children: ['IC4-15', 'IC4-36', 'IC4-41'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-50',
      name: '',
      intervals: [2, 2, 1, 3, 4],
      parents: ['IC6-29', 'IC6-30', 'IC6-36', 'IC6-52', 'IC6-60', 'IC6-68', 'IC6-70'],
      children: ['IC4-16', 'IC4-37', 'IC4-42', 'IC4-36', 'IC4-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-51',
      name: '',
      intervals: [2, 1, 4, 1, 4],
      parents: ['IC6-31', 'IC6-32', 'IC6-34', 'IC6-37', 'IC6-39', 'IC6-42', 'IC6-48'],
      children: ['IC4-17', 'IC4-38', 'IC4-32', 'IC4-22', 'IC4-30'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-52',
      name: '',
      intervals: [2, 1, 3, 2, 4],
      parents: ['IC6-31', 'IC6-33', 'IC6-35', 'IC6-53', 'IC6-65', 'IC6-68', 'IC6-72'],
      children: ['IC4-18', 'IC4-39', 'IC4-41', 'IC4-22', 'IC4-16'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-53',
      name: '',
      intervals: [2, 1, 2, 3, 4],
      parents: ['IC6-32', 'IC6-33', 'IC6-36', 'IC6-54', 'IC6-61', 'IC6-69', 'IC6-74'],
      children: ['IC4-19', 'IC4-40', 'IC4-42', 'IC4-22', 'IC4-7'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-54',
      name: '',
      intervals: [1, 2, 4, 1, 4],
      parents: ['IC6-37', 'IC6-40', 'IC6-41', 'IC6-42', 'IC6-43', 'IC6-44', 'IC6-49'],
      children: ['IC4-27', 'IC4-38', 'IC4-17', 'IC4-23', 'IC4-34'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-55',
      name: '',
      intervals: [1, 3, 3, 1, 4],
      parents: ['IC6-38', 'IC6-39', 'IC6-44', 'IC6-50', 'IC6-59', 'IC6-60', 'IC6-62'],
      children: ['IC4-24', 'IC4-35', 'IC4-17', 'IC4-37', 'IC4-33'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-56',
      name: '',
      intervals: [1, 3, 2, 2, 4],
      parents: ['IC6-38', 'IC6-40', 'IC6-45', 'IC6-51', 'IC6-67', 'IC6-68', 'IC6-70'],
      children: ['IC4-25', 'IC4-36', 'IC4-27', 'IC4-37', 'IC4-18'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-57',
      name: '',
      intervals: [1, 3, 1, 3, 4],
      parents: ['IC6-39', 'IC6-40', 'IC6-46', 'IC6-52', 'IC6-62', 'IC6-70', 'IC6-76'],
      children: ['IC4-26', 'IC4-37', 'IC4-38', 'IC4-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-58',
      name: '',
      intervals: [1, 2, 3, 2, 4],
      parents: ['IC6-41', 'IC6-43', 'IC6-45', 'IC6-53', 'IC6-66', 'IC6-69', 'IC6-73'],
      children: ['IC4-28', 'IC4-39', 'IC4-27', 'IC4-23', 'IC4-19'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-59',
      name: '',
      intervals: [1, 2, 2, 3, 4],
      parents: ['IC6-42', 'IC6-43', 'IC6-46', 'IC6-54', 'IC6-63', 'IC6-71', 'IC6-77'],
      children: ['IC4-29', 'IC4-40', 'IC4-38', 'IC4-23', 'IC4-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-60',
      name: '',
      intervals: [1, 1, 3, 3, 4],
      parents: ['IC6-48', 'IC6-49', 'IC6-52', 'IC6-54', 'IC6-55', 'IC6-56', 'IC6-59'],
      children: ['IC4-33', 'IC4-42', 'IC4-38', 'IC4-11', 'IC4-10'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC5-61',
      name: '',
      intervals: [3, 2, 1, 3, 3],
      parents: ['IC6-55', 'IC6-57', 'IC6-58', 'IC6-60', 'IC6-72', 'IC6-73'],
      children: ['IC4-16', 'IC4-33', 'IC4-43', 'IC4-39', 'IC4-12'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-62',
      name: '',
      intervals: [3, 1, 2, 3, 3],
      parents: ['IC6-55', 'IC6-58', 'IC6-60', 'IC6-61', 'IC6-73', 'IC6-78'],
      children: ['IC4-19', 'IC4-42', 'IC4-43', 'IC4-24', 'IC4-13'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-63',
      name: '',
      intervals: [2, 3, 1, 3, 3],
      parents: ['IC6-56', 'IC6-57', 'IC6-62', 'IC6-65', 'IC6-66', 'IC6-74', 'IC6-77'],
      children: ['IC4-26', 'IC4-33', 'IC4-39', 'IC4-40', 'IC4-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-64',
      name: '',
      intervals: [2, 2, 2, 3, 3],
      parents: ['IC6-56', 'IC6-58', 'IC6-63', 'IC6-68', 'IC6-69', 'IC6-75', 'IC6-79'],
      children: ['IC4-29', 'IC4-42', 'IC4-39', 'IC4-25', 'IC4-15'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-65',
      name: '',
      intervals: [3, 1, 3, 2, 3],
      parents: ['IC6-59', 'IC6-61', 'IC6-63', 'IC6-64', 'IC6-65', 'IC6-70', 'IC6-74'],
      children: ['IC4-18', 'IC4-40', 'IC4-42', 'IC4-24', 'IC4-26'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC5-66',
      name: 'Pentatonic Modes',
      intervals: [2, 2, 3, 2, 3],
      parents: ['IC6-64', 'IC6-66', 'IC6-67', 'IC6-69', 'IC6-71', 'IC6-75'],
      children: ['IC4-28', 'IC4-40', 'IC4-25', 'IC4-29'],
      root: 0,
      cohemitonic: false
    }
  ], [ // 4
    {
      id: 'IC4-1',
      name: '',
      intervals: [1, 1, 1, 9],
      parents: ['IC5-1', 'IC5-2', 'IC5-5', 'IC5-6', 'IC5-15', 'IC5-16', 'IC5-35'],
      children: ['IC3-1', 'IC3-2', 'IC3-3'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-2',
      name: '',
      intervals: [2, 1, 1, 8],
      parents: ['IC5-1', 'IC5-2', 'IC5-3', 'IC5-7', 'IC5-9', 'IC5-17', 'IC5-25', 'IC5-36'],
      children: ['IC3-1', 'IC3-4', 'IC3-5', 'IC3-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-3',
      name: '',
      intervals: [1, 2, 1, 8],
      parents: ['IC5-1', 'IC5-3', 'IC5-4', 'IC5-8', 'IC5-12', 'IC5-18', 'IC5-31', 'IC5-37'],
      children: ['IC3-2', 'IC3-4', 'IC3-6', 'IC3-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-4',
      name: '',
      intervals: [1, 1, 2, 8],
      parents: ['IC5-1', 'IC5-4', 'IC5-5', 'IC5-9', 'IC5-14', 'IC5-19', 'IC5-34', 'IC5-38'],
      children: ['IC3-3', 'IC3-5', 'IC3-6', 'IC3-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-5',
      name: '',
      intervals: [3, 1, 1, 7],
      parents: ['IC5-2', 'IC5-3', 'IC5-6', 'IC5-10', 'IC5-19', 'IC5-20', 'IC5-39', 'IC5-44'],
      children: ['IC3-1', 'IC3-7', 'IC3-8', 'IC3-4'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-6',
      name: '',
      intervals: [2, 2, 1, 7],
      parents: ['IC5-2', 'IC5-4', 'IC5-7', 'IC5-11', 'IC5-21', 'IC5-22', 'IC5-40', 'IC5-50'],
      children: ['IC3-2', 'IC3-7', 'IC3-9', 'IC3-5'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-7',
      name: '',
      intervals: [2, 1, 2, 7],
      parents: ['IC5-2', 'IC5-5', 'IC5-8', 'IC5-12', 'IC5-22', 'IC5-24', 'IC5-41', 'IC5-53'],
      children: ['IC3-3', 'IC3-8', 'IC3-9', 'IC3-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-8',
      name: '',
      intervals: [1, 3, 1, 7],
      parents: ['IC5-3', 'IC5-4', 'IC5-10', 'IC5-13', 'IC5-23', 'IC5-28', 'IC5-42', 'IC5-57'],
      children: ['IC3-4', 'IC3-7', 'IC3-10', 'IC3-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-9',
      name: '',
      intervals: [1, 2, 2, 7],
      parents: ['IC5-3', 'IC5-5', 'IC5-11', 'IC5-14', 'IC5-24', 'IC5-30', 'IC5-43', 'IC5-59'],
      children: ['IC3-5', 'IC3-8', 'IC3-10', 'IC3-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-10',
      name: '',
      intervals: [1, 1, 3, 7],
      parents: ['IC5-4', 'IC5-5', 'IC5-13', 'IC5-15', 'IC5-25', 'IC5-33', 'IC5-44', 'IC5-60'],
      children: ['IC3-6', 'IC3-9', 'IC3-10', 'IC3-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-11',
      name: '',
      intervals: [4, 1, 1, 6],
      parents: ['IC5-6', 'IC5-7', 'IC5-10', 'IC5-16', 'IC5-26', 'IC5-38', 'IC5-45', 'IC5-60'],
      children: ['IC3-1', 'IC3-11', 'IC3-12', 'IC3-7'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-12',
      name: '',
      intervals: [3, 2, 1, 6],
      parents: ['IC5-6', 'IC5-8', 'IC5-11', 'IC5-17', 'IC5-27', 'IC5-41', 'IC5-46', 'IC5-61'],
      children: ['IC3-2', 'IC3-11', 'IC3-13', 'IC3-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-13',
      name: '',
      intervals: [3, 1, 2, 6],
      parents: ['IC5-6', 'IC5-9', 'IC5-12', 'IC5-18', 'IC5-28', 'IC5-43', 'IC5-47', 'IC5-62'],
      children: ['IC3-3', 'IC3-12', 'IC3-13', 'IC3-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-14',
      name: '',
      intervals: [2, 3, 1, 6],
      parents: ['IC5-7', 'IC5-8', 'IC5-13', 'IC5-20', 'IC5-29', 'IC5-47', 'IC5-48', 'IC5-63'],
      children: ['IC3-4', 'IC3-11', 'IC3-14', 'IC3-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-15',
      name: '',
      intervals: [2, 2, 2, 6],
      parents: ['IC5-7', 'IC5-9', 'IC5-14', 'IC5-21', 'IC5-30', 'IC5-49', 'IC5-64'],
      children: ['IC3-5', 'IC3-12', 'IC3-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-16',
      name: '',
      intervals: [2, 1, 3, 6],
      parents: ['IC5-8', 'IC5-9', 'IC5-15', 'IC5-23', 'IC5-31', 'IC5-50', 'IC5-52', 'IC5-61'],
      children: ['IC3-6', 'IC3-13', 'IC3-14', 'IC3-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-17',
      name: '',
      intervals: [1, 4, 1, 6],
      parents: ['IC5-10', 'IC5-11', 'IC5-13', 'IC5-26', 'IC5-32', 'IC5-51', 'IC5-54', 'IC5-55'],
      children: ['IC3-7', 'IC3-11', 'IC3-15', 'IC3-10'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-18',
      name: '',
      intervals: [1, 3, 2, 6],
      parents: ['IC5-10', 'IC5-12', 'IC5-14', 'IC5-27', 'IC5-33', 'IC5-52', 'IC5-56', 'IC5-65'],
      children: ['IC3-8', 'IC3-12', 'IC3-15', 'IC3-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-19',
      name: '',
      intervals: [1, 2, 3, 6],
      parents: ['IC5-11', 'IC5-12', 'IC5-15', 'IC5-29', 'IC5-34', 'IC5-53', 'IC5-58', 'IC5-62'],
      children: ['IC3-9', 'IC3-13', 'IC3-15', 'IC3-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-20',
      name: '',
      intervals: [1, 1, 4, 6],
      parents: ['IC5-13', 'IC5-14', 'IC5-15', 'IC5-32', 'IC5-35', 'IC5-36', 'IC5-39', 'IC5-45'],
      children: ['IC3-10', 'IC3-14', 'IC3-15', 'IC3-1'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-21',
      name: '',
      intervals: [5, 1, 1, 5],
      parents: ['IC5-16', 'IC5-17', 'IC5-20', 'IC5-26', 'IC5-32', 'IC5-33', 'IC5-34', 'IC5-35'],
      children: ['IC3-1', 'IC3-15', 'IC3-16', 'IC3-11'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC4-22',
      name: '',
      intervals: [4, 2, 1, 5],
      parents: ['IC5-16', 'IC5-18', 'IC5-21', 'IC5-27', 'IC5-36', 'IC5-51', 'IC5-52', 'IC5-53'],
      children: ['IC3-2', 'IC3-15', 'IC3-17', 'IC3-12'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-23',
      name: '',
      intervals: [4, 1, 2, 5],
      parents: ['IC5-16', 'IC5-19', 'IC5-22', 'IC5-28', 'IC5-37', 'IC5-54', 'IC5-58', 'IC5-59'],
      children: ['IC3-3', 'IC3-16', 'IC3-17', 'IC3-7'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-24',
      name: '',
      intervals: [3, 3, 1, 5],
      parents: ['IC5-17', 'IC5-18', 'IC5-23', 'IC5-29', 'IC5-39', 'IC5-55', 'IC5-62', 'IC5-65'],
      children: ['IC3-4', 'IC3-15', 'IC3-18', 'IC3-13'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-25',
      name: '',
      intervals: [3, 2, 2, 5],
      parents: ['IC5-17', 'IC5-19', 'IC5-24', 'IC5-30', 'IC5-40', 'IC5-56', 'IC5-64', 'IC5-66'],
      children: ['IC3-5', 'IC3-16', 'IC3-18', 'IC3-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-26',
      name: '',
      intervals: [3, 1, 3, 5],
      parents: ['IC5-18', 'IC5-19', 'IC5-25', 'IC5-31', 'IC5-42', 'IC5-57', 'IC5-63', 'IC5-65'],
      children: ['IC3-6', 'IC3-17', 'IC3-18', 'IC3-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-27',
      name: '',
      intervals: [2, 4, 1, 5],
      parents: ['IC5-20', 'IC5-21', 'IC5-23', 'IC5-32', 'IC5-45', 'IC5-54', 'IC5-56', 'IC5-58'],
      children: ['IC3-7', 'IC3-15', 'IC3-16', 'IC3-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-28',
      name: '',
      intervals: [2, 3, 2, 5],
      parents: ['IC5-20', 'IC5-22', 'IC5-24', 'IC5-33', 'IC5-46', 'IC5-58', 'IC5-66'],
      children: ['IC3-8', 'IC3-16', 'IC3-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-29',
      name: '',
      intervals: [2, 2, 3, 5],
      parents: ['IC5-21', 'IC5-22', 'IC5-25', 'IC5-34', 'IC5-48', 'IC5-59', 'IC5-64', 'IC5-66'],
      children: ['IC3-9', 'IC3-17', 'IC3-16', 'IC3-5'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-30',
      name: 'Minor add 9',
      intervals: [2, 1, 4, 5],
      parents: ['IC5-23', 'IC5-24', 'IC5-25', 'IC5-35', 'IC5-37', 'IC5-40', 'IC5-46', 'IC5-51'],
      children: ['IC3-10', 'IC3-18', 'IC3-16', 'IC3-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-31',
      name: '',
      intervals: [1, 5, 1, 5],
      parents: ['IC5-26', 'IC5-27', 'IC5-29', 'IC5-32'],
      children: ['IC3-11', 'IC3-15'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-32',
      name: 'Major 7 (♭5)',
      intervals: [1, 4, 2, 5],
      parents: ['IC5-26', 'IC5-28', 'IC5-30', 'IC5-33', 'IC5-45', 'IC5-46', 'IC5-48', 'IC5-51'],
      children: ['IC3-12', 'IC3-16', 'IC3-11', 'IC3-10'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-33',
      name: 'Diminished Major 7',
      intervals: [1, 3, 3, 5],
      parents: ['IC5-27', 'IC5-28', 'IC5-31', 'IC5-34', 'IC5-55', 'IC5-60', 'IC5-61', 'IC5-63'],
      children: ['IC3-13', 'IC3-17', 'IC3-11', 'IC3-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-34',
      name: '',
      intervals: [1, 2, 4, 5],
      parents: ['IC5-29', 'IC5-30', 'IC5-31', 'IC5-35', 'IC5-38', 'IC5-41', 'IC5-47', 'IC5-54'],
      children: ['IC3-14', 'IC3-18', 'IC3-11', 'IC3-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-35',
      name: 'Augmented Major 7 / Major add ♭13',
      intervals: [3, 1, 4, 4],
      parents: ['IC5-36', 'IC5-37', 'IC5-42', 'IC5-43', 'IC5-44', 'IC5-48', 'IC5-55'],
      children: ['IC3-10', 'IC3-19', 'IC3-17', 'IC3-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-36',
      name: 'Augmented 7 / Dominant 7 (♯5)',
      intervals: [2, 2, 4, 4],
      parents: ['IC5-36', 'IC5-38', 'IC5-43', 'IC5-48', 'IC5-49', 'IC5-50', 'IC5-56'],
      children: ['IC3-14', 'IC3-19', 'IC3-12', 'IC3-5'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-37',
      name: 'Minor Major 7',
      intervals: [4, 1, 3, 4],
      parents: ['IC5-37', 'IC5-38', 'IC5-44', 'IC5-50', 'IC5-55', 'IC5-56', 'IC5-57'],
      children: ['IC3-6', 'IC3-18', 'IC3-19', 'IC3-7'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-38',
      name: 'Major 7 / Minor add 6',
      intervals: [3, 4, 1, 4],
      parents: ['IC5-39', 'IC5-40', 'IC5-42', 'IC5-51', 'IC5-54', 'IC5-57', 'IC5-59', 'IC5-60'],
      children: ['IC3-7', 'IC3-10', 'IC3-17', 'IC3-18'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-39',
      name: 'Dominant 7',
      intervals: [3, 3, 2, 4],
      parents: ['IC5-39', 'IC5-41', 'IC5-43', 'IC5-52', 'IC5-58', 'IC5-61', 'IC5-63', 'IC5-64'],
      children: ['IC3-8', 'IC3-14', 'IC3-17', 'IC3-13'],
      root: 3,
      cohemitonic: false
    }, {
      id: 'IC4-40',
      name: 'Minor 7 / Major 6',
      intervals: [3, 2, 3, 4],
      parents: ['IC5-40', 'IC5-41', 'IC5-44', 'IC5-53', 'IC5-59', 'IC5-63', 'IC5-65', 'IC5-66'],
      children: ['IC3-9', 'IC3-18', 'IC3-17', 'IC3-8'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-41',
      name: 'Dominant 7 (♭5)',
      intervals: [2, 4, 2, 4],
      parents: ['IC5-45', 'IC5-47', 'IC5-49', 'IC5-52'],
      children: ['IC3-12', 'IC3-14'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-42',
      name: 'Half-diminished / Minor 7 (♭5)',
      intervals: [2, 3, 3, 4],
      parents: ['IC5-46', 'IC5-47', 'IC5-50', 'IC5-53', 'IC5-60', 'IC5-62', 'IC5-64', 'IC5-65'],
      children: ['IC3-13', 'IC3-18', 'IC3-12', 'IC3-9'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC4-43',
      name: 'Diminished 7',
      intervals: [3, 3, 3, 3],
      parents: ['IC5-61', 'IC5-62'],
      children: ['IC3-13'],
      root: 0,
      cohemitonic: false
    }
  ], [ // 3
    {
      id: 'IC3-1',
      name: '',
      intervals: [1, 1, 10],
      parents: ['IC4-1', 'IC4-2', 'IC4-4', 'IC4-5', 'IC4-10', 'IC4-11', 'IC4-20', 'IC4-21'],
      children: ['IC2-1', 'IC2-2'],
      root: 0,
      cohemitonic: true
    }, {
      id: 'IC3-2',
      name: '',
      intervals: [2, 1, 9],
      parents: ['IC4-1', 'IC4-2', 'IC4-3', 'IC4-6', 'IC4-7', 'IC4-12', 'IC4-16', 'IC4-22', 'IC4-30'],
      children: ['IC2-1', 'IC2-3', 'IC2-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-3',
      name: '',
      intervals: [1, 2, 9],
      parents: ['IC4-1', 'IC4-3', 'IC4-4', 'IC4-7', 'IC4-9', 'IC4-13', 'IC4-19', 'IC4-23', 'IC4-34'],
      children: ['IC2-2', 'IC2-3', 'IC2-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-4',
      name: '',
      intervals: [3, 1, 8],
      parents: ['IC4-2', 'IC4-3', 'IC4-5', 'IC4-8', 'IC4-13', 'IC4-14', 'IC4-24', 'IC4-26', 'IC4-35'],
      children: ['IC2-1', 'IC2-4', 'IC2-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-5',
      name: '',
      intervals: [2, 2, 8],
      parents: ['IC4-2', 'IC4-4', 'IC4-6', 'IC4-9', 'IC4-15', 'IC4-25', 'IC4-29', 'IC4-36'],
      children: ['IC2-2', 'IC2-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-6',
      name: '',
      intervals: [1, 3, 8],
      parents: ['IC4-3', 'IC4-4', 'IC4-8', 'IC4-10', 'IC4-16', 'IC4-18', 'IC4-26', 'IC4-33', 'IC4-37'],
      children: ['IC2-3', 'IC2-4', 'IC2-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-7',
      name: '',
      intervals: [4, 1, 7],
      parents: ['IC4-5', 'IC4-6', 'IC4-8', 'IC4-11', 'IC4-17', 'IC4-23', 'IC4-27', 'IC4-37', 'IC4-38'],
      children: ['IC2-1', 'IC2-5', 'IC2-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-8',
      name: '',
      intervals: [3, 2, 7],
      parents: ['IC4-5', 'IC4-7', 'IC4-9', 'IC4-12', 'IC4-18', 'IC4-25', 'IC4-28', 'IC4-39', 'IC4-40'],
      children: ['IC2-2', 'IC2-5', 'IC2-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-9',
      name: '',
      intervals: [2, 3, 7],
      parents: ['IC4-6', 'IC4-7', 'IC4-10', 'IC4-14', 'IC4-19', 'IC4-28', 'IC4-29', 'IC4-40', 'IC4-42'],
      children: ['IC2-3', 'IC2-5', 'IC2-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-10',
      name: '',
      intervals: [1, 4, 7],
      parents: ['IC4-8', 'IC4-9', 'IC4-10', 'IC4-17', 'IC4-20', 'IC4-30', 'IC4-32', 'IC4-35', 'IC4-38'],
      children: ['IC2-4', 'IC2-5', 'IC2-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-11',
      name: '',
      intervals: [5, 1, 6],
      parents: ['IC4-11', 'IC4-12', 'IC4-14', 'IC4-17', 'IC4-21', 'IC4-31', 'IC4-32', 'IC4-33', 'IC4-34'],
      children: ['IC2-1', 'IC2-6', 'IC2-5'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-12',
      name: '',
      intervals: [4, 2, 6],
      parents: ['IC4-11', 'IC4-13', 'IC4-15', 'IC4-18', 'IC4-22', 'IC4-32', 'IC4-36', 'IC4-41', 'IC4-42'],
      children: ['IC2-2', 'IC2-6', 'IC2-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-13',
      name: 'Diminished Triad',
      intervals: [3, 3, 6],
      parents: ['IC4-12', 'IC4-13', 'IC4-16', 'IC4-19', 'IC4-24', 'IC4-33', 'IC4-39', 'IC4-42', 'IC4-43'],
      children: ['IC2-3', 'IC2-6'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-14',
      name: '',
      intervals: [2, 4, 6],
      parents: ['IC4-14', 'IC4-15', 'IC4-16', 'IC4-20', 'IC4-27', 'IC4-34', 'IC4-36', 'IC4-39', 'IC4-41'],
      children: ['IC2-4', 'IC2-6', 'IC2-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-15',
      name: '',
      intervals: [1, 5, 6],
      parents: ['IC4-17', 'IC4-18', 'IC4-19', 'IC4-20', 'IC4-21', 'IC4-22', 'IC4-24', 'IC4-27', 'IC4-31'],
      children: ['IC2-5', 'IC2-6', 'IC2-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-16',
      name: 'Sus 2 / Sus 4 / Quartal',
      intervals: [2, 5, 5],
      parents: ['IC4-21', 'IC4-23', 'IC4-25', 'IC4-27', 'IC4-28', 'IC4-29', 'IC4-30', 'IC4-32'],
      children: ['IC2-5', 'IC2-2'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-17',
      name: 'Major Triad',
      intervals: [4, 3, 5],
      parents: ['IC4-22', 'IC4-23', 'IC4-26', 'IC4-29', 'IC4-33', 'IC4-35', 'IC4-38', 'IC4-39', 'IC4-40'],
      children: ['IC2-3', 'IC2-5', 'IC2-4'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-18',
      name: 'Minor Triad',
      intervals: [3, 4, 5],
      parents: ['IC4-24', 'IC4-25', 'IC4-26', 'IC4-30', 'IC4-34', 'IC4-37', 'IC4-38', 'IC4-40', 'IC4-42'],
      children: ['IC2-4', 'IC2-5', 'IC2-3'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC3-19',
      name: 'Augmented Triad',
      intervals: [4, 4, 4],
      parents: ['IC4-35', 'IC4-36', 'IC4-37'],
      children: ['IC2-4'],
      root: 0,
      cohemitonic: false
    }
  ], [ // 2
    {
      id: 'IC2-1',
      name: 'Minor 2ⁿᵈ / Major 7ᵗʰ',
      intervals: [1, 11],
      parents: ['IC3-1', 'IC3-2', 'IC3-3', 'IC3-4', 'IC3-6', 'IC3-7', 'IC3-10', 'IC3-11', 'IC3-15'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC2-2',
      name: 'Major 2ⁿᵈ / Minor 7ᵗʰ',
      intervals: [2, 10],
      parents: ['IC3-1', 'IC3-2', 'IC3-3', 'IC3-5', 'IC3-8', 'IC3-9', 'IC3-12', 'IC3-14', 'IC3-16'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC2-3',
      name: 'Minor 3ʳᵈ / Major 6ᵗʰ',
      intervals: [3, 9],
      parents: ['IC3-2', 'IC3-3', 'IC3-4', 'IC3-6', 'IC3-8', 'IC3-9', 'IC3-13', 'IC3-17', 'IC3-18'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC2-4',
      name: 'Major 3ʳᵈ / Minor 6ᵗʰ',
      intervals: [4, 8],
      parents: ['IC3-4', 'IC3-5', 'IC3-6', 'IC3-7', 'IC3-10', 'IC3-12', 'IC3-14', 'IC3-17', 'IC3-18', 'IC3-19'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC2-5',
      name: 'Perfect 4ᵗʰ / Perfect 5ᵗʰ',
      intervals: [5, 7],
      parents: ['IC3-7', 'IC3-8', 'IC3-9', 'IC3-10', 'IC3-11', 'IC3-15', 'IC3-16', 'IC3-17', 'IC3-18'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }, {
      id: 'IC2-6',
      name: 'Tritone',
      intervals: [6, 6],
      parents: ['IC3-11', 'IC3-12', 'IC3-13', 'IC3-14', 'IC3-15'],
      children: ['IC1-1'],
      root: 0,
      cohemitonic: false
    }
  ], [ // 1
    {
      id: 'IC1-1',
      name: 'Unison / Octave',
      intervals: [12],
      parents: ['IC2-1', 'IC2-2', 'IC2-3', 'IC2-4', 'IC2-5', 'IC2-6'],
      children: [],
      root: 0,
      cohemitonic: false
    }
  ]
];
