import React, { useState, useEffect } from 'react';
import employeesData from '../../data/employees.json';
import './EmployeeDirectory.css';

type Employee = {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    profilePicture: string;
};

const EmployeeDirectory = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setEmployees(employeesData);
    }, []);

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="employee-directory">
            <h2>Employee Directory</h2>
            <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="employee-list">
                {filteredEmployees.map(employee => (
                    <li key={employee.id} className="employee-item">
                        <img src={employee.profilePicture} alt={employee.name} className="employee-photo" />
                        <div className="employee-info">
                            <h3>{employee.name}</h3>
                            <p>{employee.role}</p>
                            <p>{employee.email} | {employee.phone}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeDirectory;