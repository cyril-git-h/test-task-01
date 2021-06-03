import React, { useState } from 'react';
import { FormRow, TitleRow } from './Rows';
import { Grid } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import Modal from '../Modal';
import ModalInner from './ModalInner';

export default function MainPage({ classes }: { classes:ClassNameMap }) {

    let [modal, setModal] = useState(false);

    const history = useHistory();
    function toUser(e: React.MouseEvent, id: number) {
        e.stopPropagation();
        let target = e.target as HTMLElement;
        if (target.closest('button')) return;
        if (e.detail === 2) history.push(`/user/${id}`);
    }
    const users = useSelector((state: RootStateOrAny) => state.users);
    return (
        <div className={classes.root}>
        <Modal modalActive={modal} setModalActive={setModal}>
            {(props:any) => <ModalInner {...props}></ModalInner>}
        </Modal>
            <Grid>
                <Grid container item lg={12} spacing={2}>
                    <TitleRow classes={classes} setModal={setModal}/>
                </Grid>
                {
                    users.map((user: any) =>
                        <Grid container key={user?.id} item lg={12} spacing={2} onClick={(e) => toUser(e, user.id)}>
                            <FormRow classes={classes} user={user} />
                        </Grid>)
                }
            </Grid>
        </div>
    );
}
