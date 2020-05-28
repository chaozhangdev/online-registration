import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NetlifyForm from 'react-netlify-form'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <Typography color='primary' variant='h5' align='center'>知行教育 - 在线报名表</Typography>
      {/* <Divider /> */}

      <NetlifyForm name='Registration Form' className={classes.root}>
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for contacting us!</div>
            }
            {!loading && !success &&
              <div>
                <input type='text' name='Name' required />
                <textarea name='Message' required />
                <button>Submit</button>
              </div>
            }
          </div>
        )}
        <TextField id="nameParent" label="家长姓名" required='true'  variant="outlined" />
        <TextField id="phone" label="联系电话" variant="outlined" />
        <TextField id="wechat" label="微信" required='true'  variant="outlined" />
        <TextField id="nameStudent" label="学生姓名" required='true' variant="outlined" />
        <TextField id="grade" label="学生年级" required='true'  variant="outlined" />
        <TextField id="course" label="报名课程" required='true'  variant="outlined" />
        <Button type='submit' className={classes.button}  variant="contained" color="primary">提 交</Button>
      </NetlifyForm>

      {/* <form name='registration' method="post" netlify className={classes.root} autoComplete="off">
     
      </form> */}
    </div>
    

  );
}