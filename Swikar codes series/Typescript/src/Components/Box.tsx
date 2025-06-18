type TProps = {
  title : string;
  description: string;
  boxno?: number;
}

const Box = ({title, ...rest}: TProps) => {
  return (
   <>
   <p>box</p>
   <p>{rest.boxno}</p>
   <p>{title}</p>
   <p>{rest.description}</p>
   <p>{rest.boxno}</p>
   </>
  )
}

export default Box;
