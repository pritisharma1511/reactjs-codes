function Profile() {
  return (
    <div>
      <h1>Profile card</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
            <div>
                <strong>hi Alice, have a wonderful day!!</strong>
            </div>
        }
      >
       <p>Hobbies :Reading , Traveling</p>
       <button>Contact</button>
      </ProfileCard>

      <ProfileCard
          name="Bob"
          age={25}
          greeting={
              <div>
                    <strong>hi Bob, have a great day!!</strong>
                </div>
            }
          >
            <p>Hobbies :Cooking , Hiking</p>
            <button>Contact</button>
          </ProfileCard>
        

    </div>
  );
}

export default Profile;

function ProfileCard({ name, age, greeting, children }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {greeting}
      {children}
    </div>
  );
}