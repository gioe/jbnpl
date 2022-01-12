import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import {
    Challenge,
    ChallengeResponse,
} from "../helpers/types";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import {resumeAggregation} from "../pages/api/mxClient";

interface State {
    challengeResponses: ChallengeResponse[];
}

let initialState: State = {
    challengeResponses: [],
}

interface ChallengeContentProps {
    memberGuid: string;
    challenges: Challenge[];
    closeChallengeModal: () => void;
    handleMemberUpdate: (member: any) => void;
}

export default function ChallengeContent({memberGuid, challenges, closeChallengeModal, handleMemberUpdate}: ChallengeContentProps) {

    initialState.challengeResponses =  challenges.map((value: { guid: any; }) => {
        return {
            guid: value.guid,
            value: ""
        } as ChallengeResponse
    })

    const [submitting, setSubmitting] = React.useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
    const [challengeResponses, setChallengeResponses] = React.useState(initialState.challengeResponses);

    const submitChallenge = () => {
        setSubmitting(true)
        resumeAggregation(challengeResponses, memberGuid).then(data => {
            if (data.error) {
            } else {
                handleMemberUpdate(data.response.member)
            }
            setSubmitting(false)
            closeChallengeModal()
        })
    }

    const handleChange = (event: any) => {
        const id = event.target.id
        const value = event.target.value
        const index = challengeResponses.findIndex(element => element.guid == id)
        challengeResponses[index].value = value
        const responsesAreMissing = challengeResponses.filter(credential => credential.value.length == 0).length > 0
        setSubmitButtonDisabled(responsesAreMissing)
        setChallengeResponses([...challengeResponses])
    }

    const fieldForChallenge = (challenge: Challenge) => {
        switch (challenge.type) {
            case "TEXT":
                return (
                    <div key={challenge.guid}>
                        <Typography key={challenge.guid}>{challenge.label}</Typography>
                        <TextField key={challenge.guid}
                                          id={challenge.guid}
                                          variant="outlined"
                                          onChange={handleChange}/>
                    </div>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            {challenges.map(challenge => {
                return fieldForChallenge(challenge)
            })}
            <LoadingButton
                onClick={submitChallenge}
                loading={submitting}
                loadingIndicator="Submitting..."
                variant="outlined"
                disabled={submitButtonDisabled}
            >
                Submit
            </LoadingButton>
            <Button variant="outlined"
                    onClick={closeChallengeModal}>
                Cancel
            </Button>
        </>
    );
}
