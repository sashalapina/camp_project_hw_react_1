export function UserCard({ name, age, onReset }) {
    return (
      <div className="user-card-box">
        <div className="user-card">
            <h1 className="user-card-title">User #1</h1>
            <p className="user-card-name"><strong>Name: </strong>{name}</p>
            <p className="user-card-age"><strong>Age: </strong> {age}</p>
        </div>
      </div>
    );
  }