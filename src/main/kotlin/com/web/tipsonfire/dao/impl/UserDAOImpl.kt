/*

import com.web.tipsonfire.dto.User
import jakarta.persistence.EntityManager
import jakarta.persistence.TypedQuery
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
class UserDAOImpl @Autowired constructor(private val entityManager: EntityManager) : UserDAO {
    @Transactional
    override fun save(event: User?) {
        entityManager.persist(event)
    }

    @Transactional
    override fun update(event: User?) {
        */
/* Event resultEvent = findById(event.getId());
        resultEvent.setEventType(EventType.Private.name());*//*

        entityManager.merge<Any>(event)
    }

    @Transactional
    override fun delete(id: Int) {
        val eventToRemove: User = findById(id)
        entityManager.remove(eventToRemove)
    }

    override fun findById(id: Int): User {
        return entityManager.find(User::class.java, id)
    }

    override fun findByName(userName: String, nothing: Nothing?): Iterable<User?>? {

    }
}*/
