import FormClient from '../../components/FormClient';

const NewClient = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2 text-blue-500 bg-slate-900 py-3 w-60 rounded-lg mx-auto ">
          Nuevo Cliente
        </h1>
        <p className="font-bold text-xl">
          Llena todos los campos para registrar un cliente
        </p>
      </div>
      <FormClient />
      <div className="mt-10 md:w-3/4 mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio
          maxime quod molestias eius earum aliquid illo quaerat rem dignissimos
          aliquam error corporis aspernatur excepturi deleniti animi,
          necessitatibus, velit ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam temporibus eius quibusdam perspiciatis
          praesentium, laudantium corrupti delectus nobis quas iure atque
          voluptatum numquam libero! Impedit odio sit mollitia ipsam eligendi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit
          ducimus nostrum soluta facilis quam quo dolores illum ex eligendi
          aliquid, esse neque quia aspernatur est veritatis quisquam unde
          consectetur expedita quos beatae ipsa. Incidunt cupiditate totam
          libero, numquam eligendi iste amet dolorum quas repellat sint nam
          repudiandae est exercitationem perspiciatis temporibus officiis
          placeat possimus! Animi aspernatur quis quod soluta hic totam corporis
          accusantium in esse, est doloremque qui reprehenderit sunt cumque
          itaque quos blanditiis eum optio illo ipsum ipsam eligendi
          voluptatibus vero consequuntur. Iure saepe nemo ullam ducimus, amet
          possimus rem ab hic, fuga odit facere, praesentium vitae nam.
        </p>
      </div>
    </>
  );
};

export default NewClient;
