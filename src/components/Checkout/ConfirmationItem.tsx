import classes from './ConfirmationItem.module.css';
import { Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const ConfirmationItem = (props) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const {t} = useTranslation('translation');


    return (
        <Container>
            <Row>
                <Col>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </Col>
                <Col xs={6} className={classes.itemTitle}>
                    {props.name}
                    <Row>
                        <Col xs={12} className={classes.item}>
                            {`${t('LITTLE_MOMSTER.COLORS.TITLE')}: ${t(`LITTLE_MOMSTER.COLORS.${props.color?.toUpperCase()}`)}`}
                        </Col>
                        <Col xs={12} className={classes.item}>
                            {`${t('LITTLE_MOMSTER.PRODUCTS.QUANTITY')}: ${props.amount}`}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmationItem;
