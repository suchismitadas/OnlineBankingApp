import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useForm} from "react-hook-form";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
 
 

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function LoginFinal() {

    const {register,handleSubmit ,formState:{errors}} = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {reset} = useForm();
    const onSubmit = async (data,e) =>{
      
        console.log(data);
        try {
            const res = await axios.post("http://localhost:8080/login", data);
            console.log(res);
            const tokenGenerated = res.data;
            localStorage.setItem('token', tokenGenerated);
            // console.log(localStorage.getItem('token'));

            setIsSubmitted(true);
        }
        catch {
        
        }
        // it will output the data on the consol
       
    };
    if (isSubmitted)
         {
            console.log(isSubmitted);
               return <Navigate to="/login/welcome"/>;
                
         }

  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
         <form onSubmit = {handleSubmit(onSubmit)}> 
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="text"
              placeholder="johndoe@email.com"
              defaultValue = "" 
              {...register("userName",
                //   {required: "Email is required.",
                //   pattern: {
                //       value : /^[^@ ]+@[^@]+\.[^@.]{2,}$/,
                //       message : "Email is not valid."
                //   }
              )}
              />
              {errors.email && <p className = "errorMsg">{errors.email.message}</p>}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              defaultValue = "" 
              {...register("password",
                  {required: "Password is required.",
                  minLength : {
                      value :6,
                      message: "Password should be atleast 6 characters"
                  },
                  maxLength : {
                      value : 12,
                      message : "Password should not exceed beyond 12 characters"
                  }
              })}
              />
              {errors.password && <p className = "errorMsg">{errors.password.message}</p>}
          </FormControl>
            <div className="container d-flex align-items-center flex-column">
                
                    
                    <Button type = "submit" sx={{ mt: 1 /* margin top */ }}>
                    Login
                  </Button>
                  
                  </div>
         {/* <Button  type="submit" sx={{ mt: 1  }}>
            Log in</Button> */}
          </form>
          <Typography
            endDecorator={<Link href="/register">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
