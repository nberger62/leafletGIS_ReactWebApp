import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import { useMutation } from "react-query";

// Rough sketch
const postContactInfo = ({name, description, budget, company_name, start_date}) => {
  console.log(name, description, budget, company_name, start_date);
  return fetch("http://localhost:8080/api/contact", {
    method: "POST",
    body: {
      contact: {
        name,
        description,
        budget,
        company_name,
        start_date
      },
    },
  });
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  budget: yup // custom message in form
    .number()
    .positive()
    .required(),
company_name: yup.string().required(),
start_date: yup.string().required()
});

const ContactForm = (props) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
        name: "",
        description: "",
        budget: 1000.00,
        company_name: "",
        start_date: ""
    },
    resolver: yupResolver(schema)
  });

  const [mutateContactForm] = useMutation(postContactInfo, {
    onSuccess: (data) => {
      // show success message
    },
    onError: (error) => {
      //show error message
    }
  })

  const handleOnSubmit = data => {
    console.log("Form Data", data)
    mutateContactForm({...data})
  }

  return (
    <Fragment>
      <Typography variant="h6">
        Get a quote submitted today by filling out the form below!
      </Typography>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid item>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  inputRef={register}
                />
                {errors?.name?.message && (
                  <Typography color="error" variant="body2">
                    {errors?.name?.message}
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  inputRef={register}
                  multiline
                />
                {errors?.description?.message && (
                  <Typography color="error" variant="body2">
                    {errors?.description?.message}
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <TextField
                  id="budget"
                  name="budget"
                  label="Budget(In Dollars)"
                  variant="outlined"
                  inputRef={register}
                  type="number"
                />
                {errors?.budget?.message && (
                  <Typography color="error" variant="body2">
                    Enter the budget amount you want to spend
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <TextField
                  id="company_name"
                  name="company_name"
                  label="Who do you work for?"
                  variant="outlined"
                  inputRef={register}
                />
                {errors?.company_name?.message && (
                  <Typography color="error" variant="body2">
                    Enter the company name who is requesting the contract
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <TextField
                  id="start_date"
                  name="start_date"
                  variant="outlined"
                  inputRef={register}
                  type="date"
                />
                {errors?.start_date?.message && (
                  <Typography color="error" variant="body2">
                    Enter the estimed start date for consultation
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" type="submit">
                  Submit Your Quote
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Fragment>
  );
}

export default ContactForm;