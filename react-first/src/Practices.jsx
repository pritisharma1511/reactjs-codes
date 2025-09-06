export const Practices = () => {
    const students=[1,4];
    console.log(Boolean(students.length));
    console.log(students.length);
    return (
      <>
      <p>{students.length === 0 && "No Students Found" }</p>
       {/* <p>{!students.length && "No Students Found"}</p> */}
       {/* <p>{!Boolean(students.length) && "No Students Found"}</p> */}
      <p>Number of Students: {students.length}</p>
      </>  
    )
};


