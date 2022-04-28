// PROPS DISTRUCTURING================
// inge hook use pannala PROPS use panni state assign pandrom
// Method one without DISTRUCTURING
// export function Userone(props){

//   return(
//     <div>
//       <h5>My FirstName is {props.firstName} </h5>
//       <h5>My LastName is {props.lastName}</h5>
//       <h5>My LastName is {props.lastName}</h5>
//       </div>
//   )
// }
// Method two with DISTRUCTURING
export function Userone(props) {
  const { firstName, lastName } = props;
  return (
    <div>
      <h5>My FirstName is {firstName} </h5>
      <h5>My LastName is {lastName}</h5>
    </div>
  );
}
