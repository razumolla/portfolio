import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Office Desk (HRM)',
        description: "An HRM solution application developed to manage employee records, attendance, payroll, and performance reviews. The application includes an admin dashboard for HR managers and a self-service portal for employees. It supports role-based access control and integrates with various third-party services for payroll and email notifications.",
        tools: ['React', 'Redux', 'Node.js', 'NestJs', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Antd'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Smart POS',
        description: "A smart Point of Sale (POS) system developed for inventory and sales management. The system includes features like barcode scanning, real-time inventory tracking, sales analytics, and reporting. It supports multiple payment methods and integrates with third-party accounting software for seamless financial management.",
        tools: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Doctors Portal',
        description: "A comprehensive portal for doctors to manage patient records, appointments, and consultations. The portal features an easy-to-use interface for doctors to view patient history, schedule appointments, and conduct virtual consultations. It includes patient authentication, prescription management, and integration with pharmacies.",
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Resume Builder',
        description: "A web application for users to create and customize professional resumes. The application provides various templates and customization options for users to tailor their resumes according to their needs. It includes features like PDF export, real-time preview, and template selection.",
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    }

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },