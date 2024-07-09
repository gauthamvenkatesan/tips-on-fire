import com.web.tipsonfire.dto.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserDAO: JpaRepository<User, Int>{
    fun save(user: User?): User?
    fun findByName(userName: String): Iterable<User?>?

}