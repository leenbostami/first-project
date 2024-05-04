"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";


export default function UsersTable() {

  const [users,setUsers]=useState([]);

    useEffect(() => {
    fetch("https://dummyjson.com/users", {
      method: "GET",
    })
    
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Table  style={{ width: "fit-content", marginTop: "20px" }}>
      <TableCaption>{users.length>0? 'A list of your recent users.':'No users yet'}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead className="text-right">Birthday Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
         {users.map((user,index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.birthDate}</TableCell>
            <TableCell className="text-right">{user.firstName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}