import React, { Component, getGlobal } from "reactn";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ShareIcon from "@material-ui/icons/Share";

class SharedDialogWorkout extends Component {
  state = {
    setOpen: false
  };

  toggleDialog = () => {
    this.setState({
      setOpen: !this.state.setOpen
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Fab
          style={{ float: "right" }}
          size="small"
          onClick={this.toggleDialog}
          color="secondary"
          aria-label="Edit"
          className={classes.fab}
        >
          <ShareIcon />
        </Fab>

        <Dialog
          open={this.state.setOpen}
          onClose={this.toggleDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Report this user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              See something malicious, offensive, or something you wouldn't want
              grandma to see? Let us know.
            </DialogContentText>
            <FormControl style={{ paddingTop: 8 }} fullWidth>
              <InputLabel htmlFor="age-simple">*Report Catagories</InputLabel>
              <Select
                value={this.state.reportyCat}
                onChange={this.handleChange}
                inputProps={{
                  name: "reportyCat"
                }}
              >
                <MenuItem value={"Sexual content"}>Sexual content</MenuItem>
                <MenuItem value={"Identity theft"}>Identity theft</MenuItem>
                <MenuItem value={"Threatening content"}>
                  Threatening content
                </MenuItem>
                <MenuItem value={"Harassment"}>Harassment</MenuItem>
                <MenuItem
                  value={
                    "Other (please specify more information in the field below)"
                  }
                >
                  Other (please specify more information in the field below)
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              style={{ paddingTop: 8 }}
              fullWidth
              rows="6"
              multiline
              inputProps={{ maxLength: 500 }}
              id="input-with-icon-grid"
              placeholder="*Please provide additional details..."
              name="reportyText"
              onChange={this.handleChange}
              value={this.state.reportyText}
            />
          </DialogContent>
          <DialogActions>
            {this.state.reportySuc ? (
              <Typography style={{ width: "50%" }}>
                Thanks. Your report is on the way.
              </Typography>
            ) : (
              ""
            )}

            <Button onClick={this.toggleDialog} color="primary">
              Close
            </Button>
            <Button
              style={{ width: 143 }}
              disabled={
                !this.state.reportyCat ||
                this.state.reportyText.length < 5 ||
                !this.state.canReport
              }
              onClick={this.reportButton}
              color="primary"
            >
              {this.state.timer < 60
                ? `Send Report (${this.state.timer})`
                : "Send Report"}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default SharedDialogWorkout;
