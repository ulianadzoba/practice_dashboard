import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const categories = [
    {
        title: "SQL",
        id: 1
    },
    {
        title: "s3",
        id: 2
    },
    {
        title: "Python",
        id: 3
    },
    {
        title: "PostgreSQL",
        id: 4
    },
    {
        title: "Oracle",
        id: 5
    },
    {
        title: "MySQL",
        id: 6
    },
    {
        title: "Python",
        id: 7
    }, 
    {
        title: "EC2",
        id: 8
    },
    {
        title: "CloudWatch",
        id: 9
    },
    {
        title: "AW2",
        id: 10
    }
];

export const markOptions = [
    { id: 1, value: "none", label: <FontAwesomeIcon icon={faCircle} style={{color: "silver"}}/> },
    { id: 2, value: "beginner", label: <FontAwesomeIcon icon={faCircle} style={{color:"rgb(253, 227, 42)"}}/> },
    { id: 3, value: "qualified", label: <FontAwesomeIcon icon={faCircle} style={{color:"rgb(169, 227, 129)"}}/> },
    { id: 4, value: "expert", label: <FontAwesomeIcon icon={faCircle} style={{color:"rgb(225, 106, 129)"}}/> }
];

export const employeesData = [
    {
        id: 1,
        name: "Phet Putrie",
        photo: "photo1.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'none', category_id: 1},
            {id: 2, category: 's3', mark: 'expert', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'beginner', category_id: 3},
            {id: 4, category: 'oracle', mark: 'expert', category_id: 4},
            {id: 5, category: 'sql', mark: 'qualified', category_id: 5},
            {id: 6, category: 'sql', mark: 'beginner', category_id: 6},
            {id: 7, category: 'sql', mark: 'expert', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'none', category_id: 8},
            {id: 9, category: 'sql', mark: 'beginner', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'expert', category_id: 10},
        ]
    },
    {
        id: 2,
        name: "Gunther Ackner",
        photo: "photo1.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'qualified', category_id: 1},
            {id: 2, category: 's3', mark: 'none', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'expert', category_id: 3},
            {id: 4, category: 'oracle', mark: 'qualified', category_id: 4},
            {id: 5, category: 'sql', mark: 'qualified', category_id: 5},
            {id: 6, category: 'sql', mark: 'expert', category_id: 6},
            {id: 7, category: 'sql', mark: 'qualified', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'beginner', category_id: 8},
            {id: 9, category: 'sql', mark: 'beginner', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'expert', category_id: 10},  ]
    },
    {
        id: 3,
        name: "Jon Siverton",
        photo: "photo3.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'beginner', category_id: 1},
            {id: 2, category: 's3', mark: 'expert', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'beginner', category_id: 3},
            {id: 4, category: 'oracle', mark: 'none', category_id: 4},
            {id: 5, category: 'sql', mark: 'expert', category_id: 5},
            {id: 6, category: 'sql', mark: 'beginner', category_id: 6},
            {id: 7, category: 'sql', mark: 'expert', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'none', category_id: 8},
            {id: 9, category: 'sql', mark: 'qualified', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'qualified', category_id: 10},
        ]
    },
    {
        id: 4,
        name: "Kamil Chirai",
        photo: "photo1.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'none', category_id: 1},
            {id: 2, category: 's3', mark: 'expert', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'beginner', category_id: 3},
            {id: 4, category: 'oracle', mark: 'expert', category_id: 4},
            {id: 5, category: 'sql', mark: 'qualified', category_id: 5},
            {id: 6, category: 'sql', mark: 'beginner', category_id: 6},
            {id: 7, category: 'sql', mark: 'expert', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'none', category_id: 8},
            {id: 9, category: 'sql', mark: 'beginner', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'qualified', category_id: 10},
        ]
    },
    {
        id: 5,
        name: "Fele Putrie",
        photo: "photo1.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'qualified', category_id: 1},
            {id: 2, category: 's3', mark: 'none', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'qualified', category_id: 3},
            {id: 4, category: 'oracle', mark: 'expert', category_id: 4},
            {id: 5, category: 'sql', mark: 'qualified', category_id: 5},
            {id: 6, category: 'sql', mark: 'expert', category_id: 6},
            {id: 7, category: 'sql', mark: 'none', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'qualified', category_id: 8},
            {id: 9, category: 'sql', mark: 'beginner', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'qualified', category_id: 10},  ]
    },
    {
        id: 6,
        name: "Jon Jon",
        photo: "photo3.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'none', category_id: 1},
            {id: 2, category: 's3', mark: 'expert', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'beginner', category_id: 3},
            {id: 4, category: 'oracle', mark: 'none', category_id: 4},
            {id: 5, category: 'sql', mark: 'expert', category_id: 5},
            {id: 6, category: 'sql', mark: 'beginner', category_id: 6},
            {id: 7, category: 'sql', mark: 'qualified', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'none', category_id: 8},
            {id: 9, category: 'sql', mark: 'qualified', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'expert', category_id: 10},
        ]
    },
    {
        id: 7,
        name: "Phet Jon",
        photo: "photo3.jpg",
        skills: [
            {id: 1, category: 'sql', mark: 'expert', category_id: 1},
            {id: 2, category: 's3', mark: 'qualified', category_id: 2},
            {id: 3, category: 'postrgesql', mark: 'beginner', category_id: 3},
            {id: 4, category: 'oracle', mark: 'expert', category_id: 4},
            {id: 5, category: 'sql', mark: 'expert', category_id: 5},
            {id: 6, category: 'sql', mark: 'beginner', category_id: 6},
            {id: 7, category: 'sql', mark: 'beginner', category_id: 7},
            {id: 8, category: 'cloudwatch', mark: 'none', category_id: 8},
            {id: 9, category: 'sql', mark: 'expert', category_id: 9},
            {id: 10, category: 'cloudwatch', mark: 'beginner', category_id: 10},
        ]
    } 
]