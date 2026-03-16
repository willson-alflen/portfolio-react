import * as S from './styles'
import { MdSchool, MdGroups, MdPeople, MdLeaderboard, MdBook } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ImpactItem({ value, label, desc, Icon, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false })

  return (
    <S.ImpactCard
      as={motion.div}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.1, duration: 0.9, ease: 'easeOut' }}
    >
      <S.ImpactIcon>
        <Icon />
      </S.ImpactIcon>
      <S.ImpactValue>{value}</S.ImpactValue>
      <S.ImpactLabel>{label}</S.ImpactLabel>
      <S.ImpactDesc>{desc}</S.ImpactDesc>
    </S.ImpactCard>
  )
}

ImpactItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default function Impact() {
  const stats = [
    {
      value: '10+',
      label: 'Public Schools Implemented',
      desc:
        'Structured programming curriculum deployed and standardized across multiple institutions.',
      Icon: MdSchool,
    },
    {
      value: '5,000+',
      label: 'Students Impacted',
      desc:
        'Access to technology education through scalable and aligned curriculum models.',
      Icon: MdGroups,
    },
    {
      value: '12',
      label: 'Instructors Trained & Mentored',
      desc:
        'Teacher formation ensuring quality, consistency, and program sustainability.',
      Icon: MdPeople,
    },
    {
      value: '2+ Years',
      label: 'Educational Technology Leadership',
      desc:
        'Curriculum restructuring, expansion planning, and implementation oversight.',
      Icon: MdLeaderboard,
    },
    {
      value: '10+ Years',
      label: 'Experience in Education',
      desc:
        'Strong pedagogical foundation supporting systemic educational innovation.',
      Icon: MdBook,
    },
  ]

  return (
    <S.Impact id="impact" tabIndex={0}>
      <S.ImpactContainer>
        <S.ImpactHeading>
          <h2>Scaling Educational Technology with Measurable Impact</h2>
          <p>
            Driving structured programming education across public schools through curriculum architecture, instructor formation, and scalable implementation models.
          </p>
        </S.ImpactHeading>

        <S.ImpactContent>
          {stats.map(({ value, label, desc, Icon }, index) => (
            <ImpactItem
              key={label}
              value={value}
              label={label}
              desc={desc}
              Icon={Icon}
              index={index}
            />
          ))}
        </S.ImpactContent>
        <S.ImpactStatement>
          These metrics reflect structured implementation efforts across public-private educational partnerships.
        </S.ImpactStatement>
      </S.ImpactContainer>
    </S.Impact>
  )
}
