import {Container, Iterm, Span, SpanTitle} from './AnswerService.styled';
import sprite from '../../images/sprite.svg';

export const AnswerService = ({ services }) => {
    return (
        <>
            <Container>
                {services.map(service => {
                    const formattedDate = new Date(service.updatedAt).toLocaleDateString("uk-UA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });

                    return (
                        <Iterm key={service._id}>
                            <div>
                            <h4>
                                <Span>Вид послуги: </Span> <SpanTitle>{service.type}</SpanTitle>
                            </h4>
                            <p>
                                <Span>Ім'я: </Span> {service.fullName}
                            </p>
                            <p>
                                <Span>Пошта: </Span> {service.email}
                            </p>
                            <p>
                                <Span>Телефон: </Span> {service.phone}
                            </p>
                            <p>
                                <Span>Дата: </Span> {formattedDate}
                            </p>

                            </div>

                            <svg width={32} height={32}>
                                <use xlinkHref={sprite + '#icon-dump'}/>
                            </svg>
                        </Iterm>
                    );
                })}
            </Container>
        </>
    );
};