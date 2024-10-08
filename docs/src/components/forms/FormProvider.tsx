import React from 'react';
import { useForm, FormProvider as RHFFormProvider } from 'react-hook-form';

const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm();

    return (
        <RHFFormProvider {...methods}>
            {children}
        </RHFFormProvider>
    );
};

export default FormProvider;