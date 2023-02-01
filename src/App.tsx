import { MyRouter } from './router';
import { FormProvider } from './contexts/FormContext';



function App() {
  return (
    <FormProvider>
      <MyRouter/>
    </FormProvider>
  );
}

export default App;
